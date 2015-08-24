declare module 'aurelia-flux' {
  import { Router, RouterConfiguration }  from 'aurelia-router';
  import { FluxDispatcher }  from 'aurelia-flux/flux-dispatcher';
  export class RouterManager {
    static AddFluxPipelineStep(config: any): any;
  }
  class FluxLifeCycleStep {
    run(context: any, next: any): any;
  }
}