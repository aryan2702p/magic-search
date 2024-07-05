const { Index } = require("@upstash/vector");

const index = new Index({
    url: "https://peaceful-sponge-97803-us1-vector.upstash.io",
    token: "ABkFMHBlYWNlZnVsLXNwb25nZS05NzgwMy11czFhZG1pbk56Vm1NemsyT0RBdE1ERmpOaTAwT0RJeExUbGtZMlV0WWpRM1pqTTRZV0UwTkdFMg==",
  })

async function upsertAndQuery() {
    try {
      // Upsert operation
      await index.upsert({
        id: "id1",
  vector: [0.44, 0.01, 0.11, 0.48, 0.41, 0.12, 0.43, 0.78, 0.09, 0.03, 0.85, 0.48, 0.33, 0.41, 0.17, 0.77, 0.38, 0.69, 0.16, 0.27, 0.87, 0.67, 0.31, 0.89, 0.74, 0.6, 0.46, 0.13, 0.98, 0.02, 0.39, 0.21, 0.56, 0.2, 0.84, 0.54, 0.8, 0.49, 0.94, 0.69, 0.49, 0.84, 0.11, 0.05, 0.16, 0.92, 0.08, 0.93, 0.69, 0.53, 0.55, 0.22, 0.1, 0.1, 0.62, 0.25, 0.41, 0.62, 0.08, 0.18, 0.25, 0.8, 0.46, 0.73, 0.25, 0.5, 0.27, 0.38, 0.88, 0.09, 0.43, 0.83, 0.77, 0.98, 0.22, 0.71, 0.19, 0.82, 0.32, 0.93, 0.13, 0.61, 0.18, 0.43, 0.98, 0.53, 0.16, 0.4, 0.12, 0.16, 0.18, 0.08, 0.41, 0.15, 0.99, 0.39, 0.93, 0.55, 0.45, 0.52, 0.08, 0.37, 0.99, 0.17, 0.61, 0.06, 0.81, 0.95, 0.89, 0.81, 0.28, 0.09, 0.04, 0.1, 0.98, 0.15, 0.82, 0.57, 0.56, 0.77, 0.03, 0.38, 0.84, 0.92, 0.41, 0.66, 0.84, 0.96, 0.98, 0.4, 0.97, 0.89, 0.22, 0.46, 0.22, 0.64, 0.53, 0.19, 0.02, 0.67, 0.57, 0.47, 0.55, 0.44, 0.26, 0.11, 0.72, 0.04, 0.09, 0.44, 1, 0.71, 0.86, 0.39, 0.4, 0.96, 0.58, 0.49, 0.83, 0.49, 0.54, 0.59, 0.98, 0.72, 0.41, 0.58, 0.21, 0.52, 0.37, 0.6, 1, 0.01, 0.05, 0.71, 0.25, 0.21, 0.85, 0.54, 0.39, 0.35, 0.26, 0.19, 0.43, 0.26, 0.72, 0.61, 0.1, 0.53, 0.74, 0.85, 0.85, 0.54, 0.81, 0.4, 0.17, 0.19, 0.91, 0.22, 0.64, 0.91, 0.97, 0.39, 0.29, 0.12, 0.12, 0.81, 0.63, 0.2, 0.32, 0.84, 0.91, 0.21, 0.95, 0.18, 0.83, 0.42, 0.29, 0.86, 0.71, 0.6, 0.24, 0.97, 0.61, 0.91, 0.81, 0.63, 0.69, 0.52, 0.61, 0.56, 0.52, 0.02, 0.28, 0.04, 0.21, 0.48, 0.76, 0.07, 0.34, 0.03, 0.78, 0.39, 0.96, 0.96, 0.07, 0.72, 0.86, 0.97, 0.52, 0.09, 0.71, 0.71, 0.56, 0.74, 0.64, 0, 0.82, 0.54, 0.86, 0.62, 0.75, 0.58, 0.48, 0.42, 0.22, 0.53, 0.85, 0.18, 0.36, 0.34, 0.72, 0.8, 0.1, 0.08, 0.74, 0.15, 0.67, 0.83, 0.73, 0.66, 0.81, 0.69, 0.03, 0.57, 0.81, 0.84, 0.22, 0.55, 0.57, 0.4, 0.91, 0.68, 0.5, 0.28, 0.83, 0.95, 0.06, 0.77, 0.86, 0.74, 0.5, 0.42, 0.1, 0.52, 0.08, 0.88, 0.38, 0.25, 0.26, 0.09, 0.14, 0.97, 0.09, 0.52, 0.7, 0.43, 0.91, 0.46, 0.34, 0.34, 0.39, 0.24, 0.81, 0.89, 0.93, 0.27, 0.84, 0.7, 0.99, 0.87, 0.3, 0.59, 0.74, 0.87, 0.38, 0.9, 0.53, 0.86, 0.82, 0.53, 0.79, 0.3, 0.12, 0.06, 0.91, 0.05, 0.23, 0.4, 0.58, 0.95, 0.93, 0.88, 0.48, 0.92, 0.77, 0.94, 0.06, 0.4, 0.1, 0.55, 0.58, 0.03, 0.61, 0.97, 0.59, 0.23, 0.27, 0.97, 0.37, 0.56, 0.14, 0.33, 0.01, 0.71, 0.73, 0.61, 0.89, 0.99, 0.74, 0.58, 0.84, 0.53, 0.57, 0.68, 0.09, 0.05, 0.42, 0.01, 0.15, 0.54, 0.88, 0.19, 0.19, 0.85, 0.31, 0.18, 0.18, 0.73, 0.43, 0.17, 0.91, 0.27, 0.29, 0.22, 0.9, 0.68, 0.36, 0.58, 0.89, 0.41, 0.65, 1, 0.06, 0.03, 0.4, 0.52, 0.48, 0.12, 0.27, 0.57, 0.93, 0.9, 0.53, 0.48, 0.14, 0.17, 0.9, 0.56, 0.21, 0.5, 0.02, 0.95, 0.25, 0.33, 0.06, 0.63, 0.78, 0.88, 0.96, 0.39, 0.09, 0.64, 0.42, 0.01, 0.66, 0.28, 0.2, 0.79, 0.18, 0.07, 0.67, 0.66, 0.22, 0.68, 0.5, 0.32, 0.55, 0.55, 0.12, 0.9, 0.54, 0.34, 0.33, 0.33, 0.75, 0.35, 0.51, 0.73, 0.66, 0.76, 0.67, 0.61, 1, 0.61, 0.42, 0.43, 0.13, 0.63, 0.47, 0.99, 0.03, 0, 0.74, 0.91, 0.1, 0.88, 0.77, 0.69, 0.71, 0.06, 0.18, 0.5, 0.7, 0.2, 0.18, 0.53, 0.96, 0.08, 0.62, 0.49, 0.34, 0.76, 0.33, 0.56, 0.43, 0.54, 0.04, 0.14, 0.33, 0.91, 0.36, 0.6, 0.72, 0.93, 0.62, 0.06, 0.7, 0.73, 0.92, 0.09, 0.82, 0.86, 0.57, 0.15, 0.98, 0.43, 0.31, 0.15, 0.76, 0.62, 0.81, 0.64, 0.25, 0.04, 0.63, 0.71, 0.2, 0.12, 0.5, 0.08, 0.05, 0.78, 0.51, 0.72, 0.48, 0.3, 0.51, 0.43, 0.53, 0.45, 0.31, 0.36, 0.8, 0.91, 0.4, 0.06, 0.84, 0.97, 0.91, 0.21, 0.34, 0.08, 0.45, 0.52, 0.05, 0.08, 0.48, 0.39, 0.02, 0.51, 0.91, 0.8, 0.51, 0.75, 0.34, 0.04, 0.87, 0.35, 0.03, 0.12, 0.01, 0.06, 0.96, 0.36, 0.23, 0.82, 0.54, 0.3, 0.72, 0.01, 0.6, 0.59, 0.88, 0.16, 0.18, 0.5, 0.76, 0.28, 0.74, 0.71, 0.91, 0.77, 0.79, 0.52, 0.82, 0.42, 0.75, 0.67, 0.06, 0.08, 0.74, 0.53, 0.14, 0.22, 0.15, 0.38, 0.46, 0.87, 0.82, 0.72, 0.48, 0.59, 0.55, 0.14, 0.79, 0.92, 0.32, 0.13, 0.09, 0.67, 0.05, 0.1, 0.21, 0.68, 0.77, 0.18, 0.9, 0.67, 0.26, 0.49, 0.88, 0.14, 0.05, 0.49, 0.03, 0.28, 0.08, 0.59, 0.06, 0.38, 0.62, 0.27, 0.86, 0.75, 0.57, 0.39, 0.43, 0.68, 0.18, 0.61, 0.37, 0.85, 0.75, 0.76, 0.86, 0.36, 0.05, 0.5, 0.36, 0.31, 0.83, 0.52, 0.99, 0.15, 0.86, 0.62, 0.9, 0.6, 0.57, 0.33, 0.02, 0.78, 0.39, 0.66, 0.99, 0.83, 0.33, 0.93, 0.53, 0.48, 0.81, 0.52, 0.18, 0.53, 0.19, 0.05, 0.92, 0.87, 0.31, 0.15, 0.48, 0.65, 0.68, 0.34, 0.34, 0.59, 0.41, 0.45, 0.62, 0.42, 0.71, 0.03, 0.65, 0.09, 0.37, 0.48, 0.75, 0.26, 0.68, 0.95, 0.49, 0.05, 0.51, 0.55, 0.85, 0.38, 0.73, 0.47, 0.47, 0.52, 0.92, 0.98, 0.97, 0.17, 0.87, 0.88, 0.94, 0.69, 0.18, 0.46, 0.65, 0.5, 0.8, 0.87, 0.27, 0.7, 0.71, 0.25, 0.89, 0.8, 0.41, 0.09, 0.87, 0.87, 0.86, 0.35, 0, 0.68, 0.5, 0.11, 0.59, 0.65, 0.4, 0.03, 0.09, 0.57, 0.76, 0.47],
        metadata: { metadata_field: "metadata_value" },
      });
  
      // Query operation
      const result = await index.query({
  vector: [0.44, 0.01, 0.11, 0.48, 0.41, 0.12, 0.43, 0.78, 0.09, 0.03, 0.85, 0.48, 0.33, 0.41, 0.17, 0.77, 0.38, 0.69, 0.16, 0.27, 0.87, 0.67, 0.31, 0.89, 0.74, 0.6, 0.46, 0.13, 0.98, 0.02, 0.39, 0.21, 0.56, 0.2, 0.84, 0.54, 0.8, 0.49, 0.94, 0.69, 0.49, 0.84, 0.11, 0.05, 0.16, 0.92, 0.08, 0.93, 0.69, 0.53, 0.55, 0.22, 0.1, 0.1, 0.62, 0.25, 0.41, 0.62, 0.08, 0.18, 0.25, 0.8, 0.46, 0.73, 0.25, 0.5, 0.27, 0.38, 0.88, 0.09, 0.43, 0.83, 0.77, 0.98, 0.22, 0.71, 0.19, 0.82, 0.32, 0.93, 0.13, 0.61, 0.18, 0.43, 0.98, 0.53, 0.16, 0.4, 0.12, 0.16, 0.18, 0.08, 0.41, 0.15, 0.99, 0.39, 0.93, 0.55, 0.45, 0.52, 0.08, 0.37, 0.99, 0.17, 0.61, 0.06, 0.81, 0.95, 0.89, 0.81, 0.28, 0.09, 0.04, 0.1, 0.98, 0.15, 0.82, 0.57, 0.56, 0.77, 0.03, 0.38, 0.84, 0.92, 0.41, 0.66, 0.84, 0.96, 0.98, 0.4, 0.97, 0.89, 0.22, 0.46, 0.22, 0.64, 0.53, 0.19, 0.02, 0.67, 0.57, 0.47, 0.55, 0.44, 0.26, 0.11, 0.72, 0.04, 0.09, 0.44, 1, 0.71, 0.86, 0.39, 0.4, 0.96, 0.58, 0.49, 0.83, 0.49, 0.54, 0.59, 0.98, 0.72, 0.41, 0.58, 0.21, 0.52, 0.37, 0.6, 1, 0.01, 0.05, 0.71, 0.25, 0.21, 0.85, 0.54, 0.39, 0.35, 0.26, 0.19, 0.43, 0.26, 0.72, 0.61, 0.1, 0.53, 0.74, 0.85, 0.85, 0.54, 0.81, 0.4, 0.17, 0.19, 0.91, 0.22, 0.64, 0.91, 0.97, 0.39, 0.29, 0.12, 0.12, 0.81, 0.63, 0.2, 0.32, 0.84, 0.91, 0.21, 0.95, 0.18, 0.83, 0.42, 0.29, 0.86, 0.71, 0.6, 0.24, 0.97, 0.61, 0.91, 0.81, 0.63, 0.69, 0.52, 0.61, 0.56, 0.52, 0.02, 0.28, 0.04, 0.21, 0.48, 0.76, 0.07, 0.34, 0.03, 0.78, 0.39, 0.96, 0.96, 0.07, 0.72, 0.86, 0.97, 0.52, 0.09, 0.71, 0.71, 0.56, 0.74, 0.64, 0, 0.82, 0.54, 0.86, 0.62, 0.75, 0.58, 0.48, 0.42, 0.22, 0.53, 0.85, 0.18, 0.36, 0.34, 0.72, 0.8, 0.1, 0.08, 0.74, 0.15, 0.67, 0.83, 0.73, 0.66, 0.81, 0.69, 0.03, 0.57, 0.81, 0.84, 0.22, 0.55, 0.57, 0.4, 0.91, 0.68, 0.5, 0.28, 0.83, 0.95, 0.06, 0.77, 0.86, 0.74, 0.5, 0.42, 0.1, 0.52, 0.08, 0.88, 0.38, 0.25, 0.26, 0.09, 0.14, 0.97, 0.09, 0.52, 0.7, 0.43, 0.91, 0.46, 0.34, 0.34, 0.39, 0.24, 0.81, 0.89, 0.93, 0.27, 0.84, 0.7, 0.99, 0.87, 0.3, 0.59, 0.74, 0.87, 0.38, 0.9, 0.53, 0.86, 0.82, 0.53, 0.79, 0.3, 0.12, 0.06, 0.91, 0.05, 0.23, 0.4, 0.58, 0.95, 0.93, 0.88, 0.48, 0.92, 0.77, 0.94, 0.06, 0.4, 0.1, 0.55, 0.58, 0.03, 0.61, 0.97, 0.59, 0.23, 0.27, 0.97, 0.37, 0.56, 0.14, 0.33, 0.01, 0.71, 0.73, 0.61, 0.89, 0.99, 0.74, 0.58, 0.84, 0.53, 0.57, 0.68, 0.09, 0.05, 0.42, 0.01, 0.15, 0.54, 0.88, 0.19, 0.19, 0.85, 0.31, 0.18, 0.18, 0.73, 0.43, 0.17, 0.91, 0.27, 0.29, 0.22, 0.9, 0.68, 0.36, 0.58, 0.89, 0.41, 0.65, 1, 0.06, 0.03, 0.4, 0.52, 0.48, 0.12, 0.27, 0.57, 0.93, 0.9, 0.53, 0.48, 0.14, 0.17, 0.9, 0.56, 0.21, 0.5, 0.02, 0.95, 0.25, 0.33, 0.06, 0.63, 0.78, 0.88, 0.96, 0.39, 0.09, 0.64, 0.42, 0.01, 0.66, 0.28, 0.2, 0.79, 0.18, 0.07, 0.67, 0.66, 0.22, 0.68, 0.5, 0.32, 0.55, 0.55, 0.12, 0.9, 0.54, 0.34, 0.33, 0.33, 0.75, 0.35, 0.51, 0.73, 0.66, 0.76, 0.67, 0.61, 1, 0.61, 0.42, 0.43, 0.13, 0.63, 0.47, 0.99, 0.03, 0, 0.74, 0.91, 0.1, 0.88, 0.77, 0.69, 0.71, 0.06, 0.18, 0.5, 0.7, 0.2, 0.18, 0.53, 0.96, 0.08, 0.62, 0.49, 0.34, 0.76, 0.33, 0.56, 0.43, 0.54, 0.04, 0.14, 0.33, 0.91, 0.36, 0.6, 0.72, 0.93, 0.62, 0.06, 0.7, 0.73, 0.92, 0.09, 0.82, 0.86, 0.57, 0.15, 0.98, 0.43, 0.31, 0.15, 0.76, 0.62, 0.81, 0.64, 0.25, 0.04, 0.63, 0.71, 0.2, 0.12, 0.5, 0.08, 0.05, 0.78, 0.51, 0.72, 0.48, 0.3, 0.51, 0.43, 0.53, 0.45, 0.31, 0.36, 0.8, 0.91, 0.4, 0.06, 0.84, 0.97, 0.91, 0.21, 0.34, 0.08, 0.45, 0.52, 0.05, 0.08, 0.48, 0.39, 0.02, 0.51, 0.91, 0.8, 0.51, 0.75, 0.34, 0.04, 0.87, 0.35, 0.03, 0.12, 0.01, 0.06, 0.96, 0.36, 0.23, 0.82, 0.54, 0.3, 0.72, 0.01, 0.6, 0.59, 0.88, 0.16, 0.18, 0.5, 0.76, 0.28, 0.74, 0.71, 0.91, 0.77, 0.79, 0.52, 0.82, 0.42, 0.75, 0.67, 0.06, 0.08, 0.74, 0.53, 0.14, 0.22, 0.15, 0.38, 0.46, 0.87, 0.82, 0.72, 0.48, 0.59, 0.55, 0.14, 0.79, 0.92, 0.32, 0.13, 0.09, 0.67, 0.05, 0.1, 0.21, 0.68, 0.77, 0.18, 0.9, 0.67, 0.26, 0.49, 0.88, 0.14, 0.05, 0.49, 0.03, 0.28, 0.08, 0.59, 0.06, 0.38, 0.62, 0.27, 0.86, 0.75, 0.57, 0.39, 0.43, 0.68, 0.18, 0.61, 0.37, 0.85, 0.75, 0.76, 0.86, 0.36, 0.05, 0.5, 0.36, 0.31, 0.83, 0.52, 0.99, 0.15, 0.86, 0.62, 0.9, 0.6, 0.57, 0.33, 0.02, 0.78, 0.39, 0.66, 0.99, 0.83, 0.33, 0.93, 0.53, 0.48, 0.81, 0.52, 0.18, 0.53, 0.19, 0.05, 0.92, 0.87, 0.31, 0.15, 0.48, 0.65, 0.68, 0.34, 0.34, 0.59, 0.41, 0.45, 0.62, 0.42, 0.71, 0.03, 0.65, 0.09, 0.37, 0.48, 0.75, 0.26, 0.68, 0.95, 0.49, 0.05, 0.51, 0.55, 0.85, 0.38, 0.73, 0.47, 0.47, 0.52, 0.92, 0.98, 0.97, 0.17, 0.87, 0.88, 0.94, 0.69, 0.18, 0.46, 0.65, 0.5, 0.8, 0.87, 0.27, 0.7, 0.71, 0.25, 0.89, 0.8, 0.41, 0.09, 0.87, 0.87, 0.86, 0.35, 0, 0.68, 0.5, 0.11, 0.59, 0.65, 0.4, 0.03, 0.09, 0.57, 0.76, 0.47],
        topK: 1,
        includeVectors: true,
        includeMetadata: true,
      });
  
      // Handle the query result here
      console.log("Query result:", result);
    } catch (error) {
      // Handle any errors that might occur
      console.error("Error:", error);
    }
  }
  
  // Call the async function
  upsertAndQuery();
  

