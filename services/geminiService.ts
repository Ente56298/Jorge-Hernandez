
import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const analysisSchema = {
  type: Type.OBJECT,
  properties: {
    clarification: {
      type: Type.STRING,
      description: "Una aclaración inicial sobre la confusión entre lenguajes de programación (PHP, Python) y formatos de serialización de datos (JSON, XML, YAML)."
    },
    recommendedLanguage: {
      type: Type.STRING,
      description: "El lenguaje de serialización de datos recomendado (ej. 'JSON')."
    },
    recommendationSummary: {
        type: Type.STRING,
        description: "Un resumen conciso de por qué se recomienda este lenguaje para el caso de uso del sistema SyConGob."
    },
    justification: {
      type: Type.OBJECT,
      properties: {
        interoperability: { 
            type: Type.OBJECT,
            properties: {
                summary: { type: Type.STRING, description: "Resumen de por qué el lenguaje recomendado es bueno en este criterio." },
                comparison: { type: Type.STRING, description: "Comparación con las otras opciones." }
            },
            required: ["summary", "comparison"]
        },
        maintainability: { 
            type: Type.OBJECT,
            properties: {
                summary: { type: Type.STRING, description: "Resumen de por qué el lenguaje recomendado es bueno en este criterio." },
                comparison: { type: Type.STRING, description: "Comparación con las otras opciones." }
            },
            required: ["summary", "comparison"]
        },
        performance: { 
            type: Type.OBJECT,
            properties: {
                summary: { type: Type.STRING, description: "Resumen de por qué el lenguaje recomendado es bueno en este criterio." },
                comparison: { type: Type.STRING, description: "Comparación con las otras opciones." }
            },
            required: ["summary", "comparison"]
        },
        normativity: { 
            type: Type.OBJECT,
            properties: {
                summary: { type: Type.STRING, description: "Resumen de cómo el lenguaje recomendado aborda este criterio." },
                comparison: { type: Type.STRING, description: "Comparación con las otras opciones, especialmente XML." }
            },
            required: ["summary", "comparison"]
        },
        traceability: { 
            type: Type.OBJECT,
            properties: {
                summary: { type: Type.STRING, description: "Resumen de por qué el lenguaje recomendado es bueno en este criterio." },
                comparison: { type: Type.STRING, description: "Comparación con las otras opciones." }
            },
            required: ["summary", "comparison"]
        },
      },
       required: ["interoperability", "maintainability", "performance", "normativity", "traceability"]
    },
    migrationStrategy: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          step: { type: Type.INTEGER },
          title: { type: Type.STRING },
          description: { type: Type.STRING }
        },
        required: ["step", "title", "description"]
      }
    },
    formatComparison: {
      type: Type.ARRAY,
      description: "Una tabla comparativa detallada de los formatos JSON, XML y YAML según los criterios de evaluación.",
      items: {
        type: Type.OBJECT,
        properties: {
          criterion: { type: Type.STRING, description: "El criterio de evaluación (ej. Interoperabilidad)." },
          json: { type: Type.STRING, description: "Análisis de JSON para este criterio." },
          xml: { type: Type.STRING, description: "Análisis de XML para este criterio." },
          yaml: { type: Type.STRING, description: "Análisis de YAML para este criterio." }
        },
        required: ["criterion", "json", "xml", "yaml"]
      }
    }
  },
  required: ["clarification", "recommendedLanguage", "recommendationSummary", "justification", "migrationStrategy", "formatComparison"]
};


export const generateAnalysis = async (userInput: string): Promise<AnalysisResult> => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: userInput,
            config: {
                systemInstruction: `Eres un arquitecto de sistemas experto en la modernización de tecnología gubernamental, con conocimiento específico en las normativas del Estado de México y los lineamientos del OSFEM. Tu tarea es analizar un extracto de un archivo CSV de un sistema legacy llamado "SyConGob" y proporcionar una recomendación experta para migrarlo a una arquitectura moderna basada en APIs. Tus recomendaciones deben estar alineadas con los principios del 'Manual para la Planeación, Programación y Presupuesto de Egresos Municipal', la 'Guía metodológica para el seguimiento y evaluación del Plan de Desarrollo Municipal' y la 'Metodología para la Construcción y Operación del Sistema de Evaluación de la Gestión Municipal (SEGEMUN)'.

Primero, debes aclarar la diferencia fundamental entre formatos de datos (como JSON, XML, YAML) y por qué los lenguajes de programación (como PHP o Python) no son formatos de intercambio, ya que es una confusión común.

Basado en el CSV proporcionado, responde a las siguientes preguntas:
1. Recomienda el formato de datos más adecuado (entre JSON, XML, YAML) para exponer estos datos a través de una API RESTful.
2. Justifica tu elección comparando los cinco criterios clave: interoperabilidad, mantenibilidad, performance, normatividad (considerando contextos gubernamentales donde la estructura, validación y la interoperabilidad con sistemas como los del OSFEM son cruciales), y trazabilidad. Sé detallado en la comparación con las otras alternativas.
3. Propón una estrategia clara y por pasos para la migración de los datos del formato CSV al nuevo formato y la integración con el sistema.
4. Proporciona una tabla comparativa detallada, criterio por criterio (los 5 mencionados), analizando las fortalezas y debilidades de JSON, XML y YAML para este caso de uso específico.

Devuelve tu respuesta exclusivamente en el formato JSON definido en el schema. No incluyas \`\`\`json ni \`\`\`.`,
                responseMimeType: "application/json",
                responseSchema: analysisSchema
            }
        });

        const jsonText = response.text.trim();
        const parsedResult = JSON.parse(jsonText);
        return parsedResult as AnalysisResult;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        if (error instanceof Error) {
            throw new Error(`Failed to generate analysis: ${error.message}`);
        }
        throw new Error("An unknown error occurred while generating the analysis.");
    }
};

export const generateReconduccionSuggestion = async (rowData: Record<string, string>): Promise<string> => {
    const prompt = `Eres un experto consultor en administración pública, especializado en el Sistema de Evaluación de la Gestión Municipal (SEGEMUN) del Estado de México. Tu recomendación debe ser práctica y estar alineada con la 'Guía metodológica para el seguimiento y evaluación del Plan de Desarrollo Municipal vigente' y los 'Lineamientos Generales para la Evaluación de Programas Presupuestarios Municipales'.

Tu tarea es proporcionar una recomendación correctiva (una 'reconducción') para una meta de programa que muestra una discrepancia entre lo planificado y lo logrado.

Aquí están los datos de la meta inconsistente:
- Descripción de la Meta: ${rowData.clave}
- Planificado (Ficha Técnica): ${rowData.is_esperado}
- Real (Calendarización): ${rowData.is_real}
- Diferencia (Ficha vs. Calendarización): ${rowData.diff_is}
- Meta Anual (Plan): ${rowData.am_meta}
- Avance Real: ${rowData.am_avance}
- Diferencia (Meta vs. Avance): ${rowData.diff_am}
- Estado de Consistencia (Semáforo): ${rowData.semaforo}

Basado en estos datos, proporciona una recomendación concisa, accionable y específica para el gestor del programa para abordar esta inconsistencia y alinear la ejecución del programa con sus objetivos. La sugerencia debe ser accionable y ayudar al gestor a cumplir con sus obligaciones de reporte y evaluación conforme a la normativa del OSFEM. La recomendación debe estar en español y no exceder 2-3 frases. Devuelve únicamente el texto de la recomendación, sin frases introductorias como 'Aquí está la recomendación:'.`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        return response.text.trim();
    } catch (error) {
        console.error("Error calling Gemini API for reconduccion:", error);
        if (error instanceof Error) {
            throw new Error(`Failed to generate suggestion: ${error.message}`);
        }
        throw new Error("An unknown error occurred while generating the suggestion.");
    }
};
