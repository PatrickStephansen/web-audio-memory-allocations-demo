registerProcessor(
  "demo-audio-processor",
  class DemoAudioProcessor extends AudioWorkletProcessor {
    static get parameterDescriptors() {
      return [];
    }
    process() {
      return true;
    }
  }
);
