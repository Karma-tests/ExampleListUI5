//@ui5-bundle com/santiago/exampleui5/Component-preload.js
sap.ui.require.preload({
	"com/santiago/exampleui5/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","com/santiago/exampleui5/model/models"],function(e,i,t){"use strict";return e.extend("com.santiago.exampleui5.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(t.createDeviceModel(),"device")}})});
},
	"com/santiago/exampleui5/controller/App.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/UIComponent","sap/m/MessageToast","com/santiago/exampleui5/controller/BaseController"],function(e,o,t,n){"use strict";var i;return n.extend("com.santiago.exampleui5.controller.App",{onInit:function(){i=this.getView()},Login:function(){var e=this.getRouter(i);this.navTo("List",{},true)}})});
},
	"com/santiago/exampleui5/controller/BaseController.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","sap/ui/core/UIComponent","com/santiago/exampleui5/model/formatter"],function(e,t,o,n){"use strict";return e.extend("com.santiago.exampleui5.controller.BaseController",{formatter:n,getModel:function(e){return this.getView().getModel(e)},setModel:function(e,t){return this.getView().setModel(e,t)},getResourceBundle:function(){return this.getOwnerComponent().getModel("i18n").getResourceBundle()},navTo:function(e,t,o){this.getRouter().navTo(e,t,o)},getRouter:function(){return o.getRouterFor(this)},onNavBack:function(){var e=t.getInstance().getPreviousHash();if(e!==undefined){window.history.back()}else{this.getRouter().navTo("appHome",{},true)}}})});
},
	"com/santiago/exampleui5/controller/Detail.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","sap/m/MessageBox"],function(e,a,o){"use strict";return e.extend("com.santiago.exampleui5.controller.Detail",{onInit:function(){var e=sap.ui.core.UIComponent.getRouterFor(this);e.getRoute("Detail").attachMatched(this.onRouteMatchedDetail,this);e.getRoute("DetailID").attachMatched(this.onRouteMatchedDetail,this)},onRouteMatchedDetail:function(e){var a=e.getParameter("arguments");var r=a.CIF;if(!r){o.information("1. El Cuestionario se refiere a una cobertura de responsabilidad civil en base a reclamaciones.El Contrato de Seguro ampara las Reclamaciones que se formulen por primera vez contra el Asegurado durante el periodo de vigencia del seguro de acuerdo a los términos y condiciones que se establezcan y acuerden entre las partes"+"\n\n2. El Cuestionario deberá ser rellenado, firmado y fechado por una persona que esté legalmente capacitada y autorizada para suscribir la solicitud de seguro de responsabilidad civil en representación de la empresa que actúa como solicitante"+"\n\n3. Tal y como se indica en el Art.10 de la Ley 50 / 80 de Contrato de Seguro, es deber del solicitante aportar toda la información que en el cuestionario se indica así como dar a conocer cualquier hecho relevante"+"\n\n4. Un hecho relevante es aquel hecho y / o circunstancia conocido que pueda influir en la valoración del riesgo por parte del asegurador. Si le queda duda de qué constituye un hecho relevante que deba ser comunicado al asegurador, por favor no dude en consultar a su corredor de seguros o al asegurador"+"\n\n5. Este Cuestionario no obliga a la formalización del seguro pero formará parte de cualquier contrato de Seguro que pueda emitirse como consecuencia"+"\n\n6. Es imprescindible contestar a todas las preguntas contenidas en este cuestionario.");this.getView().byId("Tomador").setValue("")}else{this.getView().byId("Tomador").setValue("Canon")}},goBack:function(){var e=sap.ui.core.UIComponent.getRouterFor(this);e.navTo("List",true)}})});
},
	"com/santiago/exampleui5/controller/List.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","sap/ui/core/UIComponent","sap/ui/core/Fragment","sap/m/MessageBox","../model/formatter"],function(o,e,t,r,i,n){"use strict";var s;return o.extend("com.santiago.exampleui5.controller.List",{formatter:n,onInit:function(){s=this.getView();s.setModel(new e({Customers:[{CIF:"B73571002",Name:"Ikea",Status:"Success"},{CIF:"E60671930",Name:"Canon",Status:"Error"}]}))},getUser:function(o){var e=o.getSource();if(!this._oPopover){r.load({id:"popoverPerfilCon",name:"com.santiago.exampleui5.view.fragments.popUpPerfil",controller:this}).then(function(o){this._oPopover=o;this.getView().addDependent(this._oPopover);this._oPopover.openBy(e)}.bind(this))}else{this._oPopover.close();this._oPopover.destroy();this._oPopover=undefined}},showMenu:function(o){var e=o.getSource();if(!this._oPopover){r.load({id:"popoverPerfilCon",name:"com.santiago.exampleui5.view.fragments.popUpNav",controller:this}).then(function(o){this._oPopover=o;this.getView().addDependent(this._oPopover);this._oPopover.openBy(e)}.bind(this))}else{this._oPopover.close();this._oPopover.destroy();this._oPopover=undefined}},onPress:function(o){var e=this.getRouter(s);e.navTo("DetailID",{CIF:"E60671930"},true)},Crear:function(o){var e=this.getRouter(s);e.navTo("Detail",{},true)},Enviar:function(){i.confirm("¿Está seguro de enviar todos los documentos seleccionados?")},Logout:function(){var o=this.getRouter(s);o.navTo("RouteApp",{},true)},getRouter:function(o){return t.getRouterFor(o)}})});
},
	"com/santiago/exampleui5/i18n/i18n.properties":'title=com.santiago.exampleui5\nappTitle=com.santiago.exampleui5\nappDescription=App Description\n',
	"com/santiago/exampleui5/i18n/i18n_en.properties":'title=com.santiago.exampleui5\nappTitle=com.santiago.exampleui5\nappDescription=App Description\n',
	"com/santiago/exampleui5/manifest.json":'{"_version":"1.21.0","sap.app":{"id":"com.santiago.exampleui5","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}"},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"com.santiago.exampleui5.view.App","type":"XML","async":true,"id":"idAppControl"},"dependencies":{"minUI5Version":"1.60.0","libs":{"sap.ui.core":{},"sap.m":{},"sap.ui.layout":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.santiago.exampleui5.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","viewPath":"com.santiago.exampleui5.view","controlId":"app","controlAggregation":"pages","async":true},"routes":[{"name":"RouteApp","pattern":"RouteApp","target":["TargetApp"]},{"name":"List","pattern":"List","target":["List"]},{"name":"Detail","pattern":"Detail","target":["Detail"]},{"name":"DetailID","pattern":"Detail/{CIF}","target":["Detail"]}],"targets":{"TargetApp":{"viewType":"XML","transition":"flip","viewName":"App"},"List":{"viewType":"XML","viewName":"List","transition":"flip"},"Detail":{"viewType":"XML","viewName":"Detail","transition":"flip"}}}}}',
	"com/santiago/exampleui5/model/formatter.js":function(){sap.ui.define([],function(){"use strict";return{status:function(e){if(e==="Success"){return"sap-icon://accept"}else{return"sap-icon://message-error"}}}});
},
	"com/santiago/exampleui5/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"com/santiago/exampleui5/view/App.view.xml":'<mvc:View controllerName="com.santiago.exampleui5.controller.App"\n  xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n  xmlns="sap.m"><Shell id="shell"><App id="app"><pages><Page id="page" showHeader="false"><content><VBox justifyContent="Center"><items><HBox justifyContent="Center"><Image src="https://raw.githubusercontent.com/SAP/ui5-tooling/master/docs/images/UI5_logo_wide.png" class="responsive"/></HBox><HBox class="responsive" justifyContent="Center"><Input id="InputUsername" type="Text" class="radius" placeholder="username"/></HBox><HBox class="responsive" justifyContent="Center"><Input id="InputPassword" type="Password" class="radius" placeholder="password"/></HBox><HBox justifyContent="Center"><Button text="Login" press="Login"></Button></HBox></items></VBox></content></Page></pages></App></Shell></mvc:View>',
	"com/santiago/exampleui5/view/Detail.view.xml":'<mvc:View xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc" xmlns:l="sap.ui.layout" xmlns="sap.m" xmlns:f="sap.ui.layout.form"\r\n\tcontrollerName="com.santiago.exampleui5.controller.Detail" xmlns:html="http://www.w3.org/1999/xhtml"><App><pages><Page showHeader="false"><content><FlexBox alignItems="Start" justifyContent="SpaceBetween"><items><Button icon="sap-icon://close-command-field" press="goBack" class="sapUiSmallMargin"/><ImageContent src="https://raw.githubusercontent.com/SAP/ui5-tooling/master/docs/images/UI5_logo_wide.png" description="Logo" press="press"/><core:Icon src="sap-icon://customer" size="2rem" press="getUser" class="sapUiSmallMargin" noTabStop="true"/></items></FlexBox><VBox class="sapUiSmallMargin" alignContent="Start"><f:SimpleForm id="SimpleFormChange480_Trial" editable="true" layout="ResponsiveGridLayout" title="Address" labelSpanXL="4" labelSpanL="4"\r\n\t\t\t\t\t\t\tlabelSpanM="4" labelSpanS="12" adjustLabelSpan="false" emptySpanXL="0" emptySpanL="0" emptySpanM="0" emptySpanS="0" columnsXL="3"\r\n\t\t\t\t\t\t\tcolumnsL="2" columnsM="1" singleContainerFullSize="false"><f:content><core:Title text="Información general"/><Label text="Tomador"/><Input id="Tomador" value="{Tomador}"/><Label text="CP"/><Input value="{SupplierName}"><layoutData><l:GridData span="XL2 L3 M3 S4"/></layoutData></Input><Label text="Domicilio Social"/><Input value="{Street}"></Input><Label text="Actividad"/><Input value="{SupplierName}"/><Label text="Asegurados"/><Input value="{Street}"></Input><Label text="Asegurador actual"/><Input value="{Street}"></Input><Label text="Broker actual"/><Input value="{Street}"></Input><core:Title text="Actividad completa de la empresa"/></f:content></f:SimpleForm></VBox></content></Page></pages></App></mvc:View>',
	"com/santiago/exampleui5/view/List.view.xml":'<mvc:View xmlns:core="sap.ui.core"\r\n  xmlns:mvc="sap.ui.core.mvc"\r\n  xmlns="sap.m"\r\n  xmlns:model="sap.ui.model"\r\n  xmlns:l="sap.ui.layout" controllerName="com.santiago.exampleui5.controller.List"\r\n  xmlns:html="http://www.w3.org/1999/xhtml"><App><pages><Page showHeader="false"><content><FlexBox alignItems="Start" justifyContent="SpaceBetween"><items><Button icon="sap-icon://menu2" class="sapUiSmallMargin" press="showMenu"/><ImageContent src="https://raw.githubusercontent.com/SAP/ui5-tooling/master/docs/images/UI5_logo_wide.png" description="Logo" press="press"/><core:Icon src="sap-icon://customer" size="2rem" press="getUser" class="sapUiSmallMargin" noTabStop="true"/></items></FlexBox><Table id="idProductsTable" alternateRowColors="true" mode="MultiSelect" inset="false" items="{ path: \'/Customers\', sorter: { path: \'Status\' } }"><columns><Column><Text text="CIF"/></Column><Column><Text text="Nombre"/></Column><Column><Text text="Status"/></Column></columns><items><ColumnListItem type="Active" press="onPress"><cells><Text text="{CIF}"/><Text text="{Name}"/><ObjectStatus icon="{path: \'Status\', formatter: \'.formatter.status\'}" state="{path: \'Status\'}"/></cells></ColumnListItem></items></Table></content><footer><OverflowToolbar id="otbFooter"><ToolbarSpacer/><Button text="Enviar" icon="sap-icon://email" type="Emphasized" press="Enviar"/><Button text="Crear" icon="sap-icon://add" type="Emphasized" press="Crear"/></OverflowToolbar></footer></Page></pages></App></mvc:View>',
	"com/santiago/exampleui5/view/fragments/popUpNav.fragment.xml":'<core:FragmentDefinition xmlns="sap.m" xmlns:core="sap.ui.core" xmlns:grid="sap.ui.layout.cssgrid" xmlns:f="sap.f"><Popover class="prueba" showHeader="false" contentWidth="320px" contentHeight="400px" placement="Bottom"><NavContainer id="navCon"><Page id="detail" title="Menu"><content><Button text="Home" press="onNav" type="Emphasized" width="100%"/><Button id="goToPersonPage" text="Track" press="onNav" width="100%"/></content></Page></NavContainer></Popover></core:FragmentDefinition> ',
	"com/santiago/exampleui5/view/fragments/popUpPerfil.fragment.xml":'<core:FragmentDefinition xmlns="sap.m" xmlns:core="sap.ui.core" xmlns:grid="sap.ui.layout.cssgrid" xmlns:f="sap.f"><Popover class="prueba" showHeader="false" contentWidth="300px" contentHeight="400px" placement="Bottom"><NavContainer id="navCon"><Page id="detail" title="Perfil"><content><FlexBox justifyContent="Center" alignContent="Center"><items><core:Icon src="sap-icon://customer" size="10rem" class="sapUiSmallMargin" noTabStop="true"/></items></FlexBox><FlexBox justifyContent="Center" alignContent="Center"><items><Text text="User 01"/></items></FlexBox></content><footer><OverflowToolbar><ToolbarSpacer/><Button type="Emphasized" press="Logout" text="Logout"/></OverflowToolbar></footer></Page></NavContainer></Popover></core:FragmentDefinition>'
});
