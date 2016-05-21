$(function() {

    var Func = (function($) {
        var _ = this;
        var job = [];
        var methodDone = [];
        _.val;
        _.callback;
        function Func(val){
          _.val=val;
          return method;
        }
        var method = {
            hooTask: function(func) {
              setTimeout(function() {
                $("h1").html("hooTask "+_.val);
                setTimeout(function() {

                    //
                    _endTask(0);
                }, 7000);
              }, 1000);
                return this;
            },
            barTask: function() {
              setTimeout(function() {
                $("h1").html("barTask "+_.val);
                setTimeout(function() {
                    
                    //
                    _endTask(1);
                }, 3000);
              }, 3000);
                return this;
            },
            done: function(callback_) {
                _.callback = callback_;
                return this;
            }
        };
        function _ifDone() {
            var t = false;
            for (var i = 0; i < methodDone.length; i++) {
                if (!methodDone[i]) return false;
            }
            return true;
        };

        function _endTask(index) {
            methodDone[index] = true;
            if (_ifDone()) {
                _.callback();
            }
        }

        var methodLen = Object.keys(method).length;

        for (var j = 0; j < methodLen - 1; j++) {
            methodDone.push(false);
        }
        return Func;
    })(jQuery);

    var func = new Func("value");
    //Example
    func.barTask().hooTask().done(function() {
        $("#view").html("done");
    });

});
