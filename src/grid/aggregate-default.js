this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.orderData,
        allowPaging: true,
        pageSettings: { pageCount: 5 },
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true },
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 140, isPrimaryKey: true, validationRules: { required: true, number: true }},
            { field: 'CustomerName', headerText: 'Customer Name', width: 150, validationRules: { required: true, minLength: 5 }},
            { field: 'Freight', width: 160, format: 'C2', textAlign: 'Right', editType: 'numericedit', validationRules: { required: true, min: 0 }},
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right', editType: 'datepickeredit'},
            { field: 'ShipCountry', headerText: 'Ship Country', width: 140, editType: 'dropdownedit'}
        ],
        aggregates: [{
            columns: [{
                type: 'Sum',
                field: 'Freight',
                format: 'C2',
                footerTemplate: 'Sum: ${Sum}'
            }]
        },
        {
            columns: [{
                type: 'Average',
                field: 'Freight',
                format: 'C2',
                footerTemplate: 'Average: ${Average}'
            }]
        }]
    });
    grid.appendTo('#Grid');
};