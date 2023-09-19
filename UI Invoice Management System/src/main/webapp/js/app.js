Ext.application({
  name: "InvoiceApp",
  launch: function () {
    var store = Ext.create("Ext.data.Store", {
      fields: [
        "slNo",
        "invoiceNumber",
        "stockCode",
        "description",
        "quantity",
        "invoiceDate",
        "unitPrice",
        "customerId",
        "country",
        "isOpen",
      ],
      data: [
        {
          slNo: 25903,
          invoiceNumber: 7777,
          stockCode: 7,
          description: "Testing-add",
          quantity: 7,
          invoiceDate: "12/01/2022",
          unitPrice: 7,
          customerId: 7,
          country: "India",
          isOpen: 0,
        },
        {
          slNo: 25899,
          invoiceNumber: "C577486",
          stockCode: 23198,
          description: "PANTRY MAGNETIC SHOPPING LIST",
          quantity: 52,
          invoiceDate: "11/20/2011 11:59",
          unitPrice: 1.45,
          customerId: 15533,
          country: "United Kingdom",
          isOpen: 0,
        },
        {
          slNo: 25898,
          invoiceNumber: "C577481",
          stockCode: "POST",
          description: "POSTAGE",
          quantity: 1,
          invoiceDate: "11/20/2011 11:39",
          unitPrice: 18,
          customerId: 12778,
          country: "Netherlands",
          isOpen: 0,
        },
        {
          slNo: 25897,
          invoiceNumber: "C577399",
          stockCode: 22138,
          description: "BAKING SET 9PIECE RETROSPOT",
          quantity: 1,
          invoiceDate: "11/18/2011 17:15",
          unitPrice: 4.95,
          customerId: 13895,
          country: "United Kingdom",
          isOpen: 0,
        },
        {
          slNo: 25890,
          invoiceNumber: "C577390",
          stockCode: 23401,
          description: "RUSTIC MIRROR WITH LACE HEART",
          quantity: 1,
          invoiceDate: "11/18/2011 17:01",
          unitPrice: 6.25,
          customerId: 18276,
          country: "United Kingdom",
          isOpen: 0,
        },
        {
          slNo: 25889,
          invoiceNumber: "C577389",
          stockCode: 23108,
          description: "SET OF 10 LED DOLLY LIGHTS",
          quantity: 2,
          invoiceDate: "11/18/2011 16:59",
          unitPrice: 6.25,
          customerId: 13381,
          country: "United Kingdom",
          isOpen: 0,
        },
      ],
      pageSize: 2,
    });
    var store1 = Ext.create('Ext.data.Store',{
		fields:["invoiceNumber"],
		data:[
			{invoiceNumber: 7777},
			{invoiceNumber: "C577486"},
			{invoiceNumber: "C577481"},
			{invoiceNumber: "C577399"},
			{invoiceNumber: "C577390"},
			{invoiceNumber: "C577389"},
			]
			})
    Ext.create("Ext.container.Viewport", {
      layout: "border",
      items: [
        {
          xtype: "panel",
          region: "north",
          height: 90,
          items: [
            {
              xtype: "container",
              layout: {
                type: "hbox",
                pack: "start",
                align: "stretch",
              },
              items: [
                {
                  xtype: "component",
                  html: '<img src="images/highradiuslogo.png" height="130" width="auto"/>',
                },
                {
                  xtype: "component",
                  html: '<img src="images/xyzproductslogo.jpg" height="50" width="auto"/>',
                  flex: 1,
                  margin: '30 0 25 0',
                  style: "text-align: center;",
                },
                {
                  xtype: "component",
                  html: "<h1>Welcome to ARPA Product Team</h1>",
                  margin: "20 20 20 0",
                },
              ],
            },
          ],
        },
        {
          xtype: "panel",
          region: "center",
          layout: "border",
          items: [
            {
              xtype: "panel",
              region: "north",
              title: "Invoice Management",
            },
            {
              xtype: "tabpanel",
              region: "center",
              items: [
                {
                  title: "All Invoices",
                },
                {
                  title: "Open Invoices",
                  xtype: "panel",
                  layout: "border",
                  items: [
                    {
                      xtype: "panel",
                      region: "north",
                      layout: "anchor",
                      items: [
                        {
                          xtype: "combobox",
                          labelAlign: "right",
                          labelWidth: 100,
                          width: 300,
                          emptyText: "Advance Search for Open Invoice",
                          store1,
                          displayField: 'invoiceNumber',
                          margin: "10 0 10 1170",
                        },
                      ],
                    },
                    {
                      xtype: "panel",
                      region: "center",
                      title: "Open Invoices",
                      layout: "fit",
                      items: [
                        {
                          xtype: "grid",
                          layout: "fit",
                          selModel: {
                            checkOnly: false,
                            injectCheckbox: "first",
                            mode: "SIMPLE",
                          },
                          selType: "checkboxmodel",
                          columns: [
                            { text: "Sl No", dataIndex: "slNo", width: 70 },
                            {
                              text: "Invoice Number",
                              dataIndex: "invoiceNumber",
                              width: 150,
                            },
                            {
                              text: "Stock Code",
                              dataIndex: "stockCode",
                              width: 200,
                            },
                            {
                              text: "Description",
                              dataIndex: "description",
                              width: 250,
                            },
                            {
                              text: "Quantity",
                              dataIndex: "quantity",
                              width: 90,
                            },
                            {
                              text: "Invoice Date",
                              dataIndex: "invoiceDate",
                              width: 170,
                            },
                            {
                              text: "Unit Price",
                              dataIndex: "unitPrice",
                              width: 90,
                            },
                            {
                              text: "Customer ID",
                              dataIndex: "customerId",
                              width: 180,
                            },
                            {
                              text: "Country",
                              dataIndex: "country",
                              width: 180,
                            },
                            {
                              text: "Is Open",
                              dataIndex: "isOpen",
                              width: 90,
                            },
                          ],
                          store: store,

                          dockedItems: [
                            {
                              xtype: "pagingtoolbar",
                              store: store,
                              displayInfo: true,
                              displayMsg:
                                "Displaying {0} - {1} of {2}",
                              emptyMsg: "No invoices to display",
                              dock: "top",
                              items: [
                                {
                                  xtype: "button",
                                  text: "Add",
                                  iconCls: "fa fa-plus-circle",
                                },
                                {
                                  xtype: "button",
                                  text: "Edit",
                                  iconCls: "fa fa-pencil-square-o",
                                  disabled: true,
                                },
                                {
                                  xtype: "button",
                                  text: "Approve",
                                  disabled: true,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  title: "Close Invoices",
                },
                {
                  title: "Deleted Invoices",
                },
                {
                  title: "Analytics",
                },
              ],
            },
          ],
        },
        {
          xtype: "panel",
          region: "south",
          height: 50,
          layout: {
            type: "hbox",
            pack: "center",
            align: "middle",
          },
          items: [
            {
              xtype: "component",
              html:
                "Copyright " +
                new Date().getFullYear() +
                " Highradius. All Rights Reserved",
            },
          ],
        },
      ],
    });
  },
});
