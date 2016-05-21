$(function() {

    var func = (function($) {
        var _ = this;
        var job = [];
        var methodDone = [];
        _.callback;
        var method = {
            hooTask: function(func) {
              setTimeout(function() {
                $("h1").html("hooTask");
                setTimeout(function() {

                    //
                    _endTask(0);
                }, 7000);
              }, 1000);
                return this;
            },
            barTask: function() {
              setTimeout(function() {
                $("h1").html("barTask");
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

        var methodLen = Object.keys(myKantai).length;

        for (var j = 0; j < methodLen - 1; j++) {
            methodDone.push(false);
        }
        return method;
    })(jQuery);

    //Example
    func.barTask().hooTask().done(function() {
        $("#view").html("done");
    });

});
