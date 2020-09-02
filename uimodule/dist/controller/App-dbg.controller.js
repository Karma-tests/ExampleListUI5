sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/m/MessageToast",
    "com/santiago/exampleui5/controller/BaseController",
  ],
  function (Controller, UIComponent, MessageToast, BaseController) {
    "use strict";
    var oView;

    return BaseController.extend("com.santiago.exampleui5.controller.App", {
      onInit: function () {
        oView = this.getView();
      },

      Login: function () {
        var oRoute = this.getRouter(oView);

        this.navTo("List", {}, true);
      },
    });
  }
);
