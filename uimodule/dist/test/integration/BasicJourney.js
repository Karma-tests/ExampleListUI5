sap.ui.define(["sap/ui/test/opaQunit","com/santiago/exampleui5/test/integration/pages/App"],function(e){"use strict";e("should show correct number of nested pages",function(e,t,i){e.iStartMyApp();i.onTheAppPage.iShouldSeePageCount(1);i.iTeardownMyApp()})});