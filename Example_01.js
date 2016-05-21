$(function() {

    var Func = (function($) {
        var _ = this;
        var job = [];
        var methodDone = [];
        var paramsLen=0;
        var response=[];
        var defoltParamHead={
          "type":"POST",
          "url":"http:xxx.xxx"
        };
        var defoltParamBody={
          "defKey1":"defVal1",
          "defKey2":"defVal2",
          "defKey3":"defVal3"
        };
        _.params=[];
        _.callback;
        function Func(params_){
          paramsLen=params_.length;
          for(var i=0;i<paramsLen){
            _.params.push({head:makeParamHead(params_[i].head),body:makeParamBody(params_[i].body)});
          }
          return method;
        }


        for(var i=0;i<paramsLen;i++){
          $.ajax({
            type: "POST",
            url: _.params[i].head.url,
            data: _.params[i].body,
            success: function(response_){
              response.push(response_);
            }
          }).done(function(){
            _endTask(i);
          });
        }
        var method = {
            done: function(callback_) {
                _.callback = callback_;
                return this;
            }
        };
        function makeParamHead(param_){
          return $.extend(true, defoltParamHead, param_||{});
        }
        function makeParamBody(param_){
          var params_=$.extend(true, defoltParamBody, param_||{});
          for(key in paramset){
            params_.push(key+"="+paramset[key]);
          }
          return params_.join("&");
        }
        function _ifDone() {
            var t = false;
            for (var i = 0; i < methodDone.length; i++) {
                if (!methodDone[i]) return false;
            }
            return true;
        };

        function _endTask(index) {
            methodDone[index] = true;
            if (_ifDone()) {_.callback(response);}
        }

        var methodLen = Object.keys(method).length;

        for (var j = 0; j < paramsLen; j++) {
            methodDone.push(false);
        }
        return Func;
    })(jQuery);

    var func = new Func([
    {
      "head":{
        "url","http:yyy.yyy"
      },
      "body":{
        "key1":"value1",
        "key2":"value2",
        "key3":"value3"
      }
    },
    "head":{
        "url","http:yyy.yyy"
      },
      "body":{
        "key1":"value1",
        "key2":"value2",
        "key3":"value3"
      }
    ]);
    //Example
    func.done(function(response_) {
        console.log(response_);
    });

});
