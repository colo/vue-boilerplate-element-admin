<template>
  <div>{{request_data}}</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@vue-element-admin/components/HelloWorld.vue'

import * as Debug from 'debug'
const debug = Debug('apps:root')

import JSPipeline from 'js-pipeline'
import PeriodicalPipeline from '@apps/root/pipelines/index'

import * as PeriodicalSources from '@apps/root/sources/index'

import DataSourcesMixin from '@mixins/dataSources'

export default {
  mixins: [DataSourcesMixin],
  // extends: DataSourcesMixin,

  name: 'Root',

  req_components: {
    'input.root': {
      range: {
        source: {
          requests: PeriodicalSources.requests
          // store: store
        }
      }
    }
  },

  data () {
    return {
      height: '0px',

      request_data: '',
      /**
      * dataSources
      **/
      store: false,
      pipeline_id: [
        'input.root',
      ],

      id: 'root',
      path: 'all',

    }
  },
  methods: {
    /**
    * @start pipelines
    **/
    create_pipelines: function (create_id, next) {
      debug('create_pipelines %o', this.$options.pipelines)

      // if (
      //   this.$options.pipelines['input.o.periodicals.host.periodical'] data&
      //   this.$options.pipelines['input.os.host.periodical'].get_input_by_id('input.os.host.periodical')
      // ) {
      //   // let requests = this.__components_sources_to_requests(this.components)
      //   // if (requests.once) {
      //   //   this.$options.pipelines['input.os.host'].get_input_by_id('input.os').conn_pollers[0].options.requests.once.combine(requests.once)
      //   //   this.$options.pipelines['input.os.host'].get_input_by_id('input.os').conn_pollers[0].fireEvent('onOnceRequestsUpdated')
      //   // }
      //   //
      //   // if (requests.periodical) {
      //   //   this.$options.pipelines['input.os.host'].get_input_by_id('input.os').conn_pollers[0].options.requests.periodical.combine(requests.periodical)
      //   //   this.$options.pipelines['input.os.host'].get_input_by_id('input.os').conn_pollers[0].fireEvent('onPeriodicalRequestsUpdated')
      //   // }
      // } else {
      const pipelines = [PeriodicalPipeline] //, HourPipeline, DayPipeline
      Array.each(pipelines, function (Pipeline) {
        let template = Object.clone(Pipeline)

        debug('create_pipelines template %o', template)

        let pipeline_id = template.input[0].poll.id
        if (!create_id || create_id === undefined || create_id === pipeline_id) {
          // template.input[0].poll.conn[0].requests = this.__components_sources_to_requests(this.components[pipeline_id], pipeline_id)
          Array.each(template.input[0].poll.conn, function (conn, index) {
            template.input[0].poll.conn[index].requests = this.__components_sources_to_requests(this.$options.req_components[pipeline_id], pipeline_id)
          }.bind(this))

          let pipe = new JSPipeline(template)

          this.$options.__pipelines_cfg[pipeline_id] = {
            ids: [],
            connected: [],
            suspended: pipe.inputs.every(function (input) { return input.options.suspended }, this)
          }

          // this.__after_connect_inputs(
          //   pipe,
          //   this.$options.__pipelines_cfg[pipeline_id],
          //   this.__resume_pipeline.pass([pipe, this.$options.__pipelines_cfg[pipeline_id], this.id, function () {
          //     debug('__resume_pipeline CALLBACK')
          //     pipe.fireEvent('onOnce')
          //   }], this)
          // )

          this.$options.pipelines[pipeline_id] = pipe
        }
      }.bind(this))

      debug('create_pipelines %o', this.$options.pipelines)

      if (next) { next() }
      // }
    },

    /**
    * @end pipelines
    **/

  }
}
</script>
