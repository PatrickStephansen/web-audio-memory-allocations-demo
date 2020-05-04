registerProcessor(
  "triangle-demo",
  class TriangleDemoProcessor extends AudioWorkletProcessor {
    static get parameterDescriptors() {
      return [];
    }
    process(inputs, outputs, parameters) {
      for (
        let outputChannel = 0;
        outputChannel < outputs[0].length;
        outputChannel++
      ) {
        for (let sampleIndex = 0; sampleIndex < 128; sampleIndex++) {
          outputs[0][outputChannel][sampleIndex] =
            Math.abs(-1 + sampleIndex / 64) - 0.5;
        }
      }

      return true;
    }
  }
);
