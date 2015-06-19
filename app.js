angular.module("app",[]).directive("qcode", qcodeDirective);
function qcodeDirective(){
  return {
      link: link,
      scope : {
        qcode: '='
      }
  };
}
function link(scope,el){
  scope.$watch('qcode',function (newVal){
    el.html("");
    el.qrcode({"text":newVal});
  });
}
