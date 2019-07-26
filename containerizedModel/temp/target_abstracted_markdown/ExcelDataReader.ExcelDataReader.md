# ExcelDataReader

@abstr_hyperlink 

Lightweight and fast library written in C# for reading Microsoft Excel files ( @abstr_number . @abstr_number - @abstr_number ).

Please feel free to fork and submit pull requests to the develop branch.

If you are reporting an issue it is really useful if you can supply an example Excel file as this makes debugging much easier and without it we may not be able to resolve any problems.

## Continuous integration

| Branch | Build status | |---------|--------------| | develop | @abstr_hyperlink | | master | @abstr_hyperlink |

## Supported file formats and versions

| File Type | Container Format | File Format | Excel Version(s) | | --------- | ---------------- | ----------- | ---------------- | | .xlsx | ZIP, CFB+ZIP | OpenXml | @abstr_number and newer | | .xls | CFB | BIFF @abstr_number | @abstr_number , @abstr_number , XP, @abstr_number   
@abstr_number , @abstr_number , v.X, @abstr_number (Mac) | | .xls | CFB | BIFF @abstr_number | @abstr_number . @abstr_number , @abstr_number | | .xls | - | BIFF @abstr_number | @abstr_number . @abstr_number | | .xls | - | BIFF @abstr_number | @abstr_number . @abstr_number | | .xls | - | BIFF @abstr_number | @abstr_number . @abstr_number , @abstr_number . @abstr_number | | .csv | - | CSV | (All) |

## Finding the binaries

It is recommended to use NuGet through the VS Package Manager Console `Install-Package <package>` or using the VS "Manage NuGet Packages..." extension. 

As of ExcelDataReader version @abstr_number . @abstr_number , the project was split into multiple packages:

Install the `ExcelDataReader` base package to use the "low level" reader interface. Compatible with net @abstr_number , net @abstr_number , netstandard @abstr_number . @abstr_number and netstandard @abstr_number . @abstr_number .

Install the `ExcelDataReader.DataSet` extension package to use the `AsDataSet()` method to populate a `System.Data.DataSet`. This will also pull in the base package. Compatible with net @abstr_number , net @abstr_number and netstandard @abstr_number . @abstr_number .

## How to use

```c# using (var stream = File.Open(filePath, FileMode.Open, FileAccess.Read)) { // Auto-detect format, supports: // - Binary Excel files ( @abstr_number . @abstr_number - @abstr_number format; *.xls) // - OpenXml Excel files ( @abstr_number format; *.xlsx) using (var reader = ExcelReaderFactory.CreateReader(stream)) { // Choose one of either @abstr_number or @abstr_number :
    
    
        //  @abstr_number . Use the reader methods
        do
        {
            while (reader.Read())
            {
                // reader.GetDouble( @abstr_number );
            }
        } while (reader.NextResult());
    
        //  @abstr_number . Use the AsDataSet extension method
        var result = reader.AsDataSet();
    
        // The result of each spreadsheet is in result.Tables
    }
    

} @abstr_code_section c# var reader = ExcelReaderFactory.CreateReader(stream, new ExcelReaderConfiguration() { // Gets or sets the encoding to use when the input XLS lacks a CodePage // record, or when the input CSV lacks a BOM and does not parse as UTF @abstr_number . // Default: cp @abstr_number (XLS BIFF @abstr_number - @abstr_number and CSV only) FallbackEncoding = Encoding.GetEncoding( @abstr_number ),
    
    
    // Gets or sets the password used to open password protected workbooks.
    Password = "password",
    
    // Gets or sets an array of CSV separator candidates. The reader 
    // autodetects which best fits the input data. Default: , ; TAB | # 
    // (CSV only)
    AutodetectSeparators = new char[] { ',', ';', '\t', '|', '#' },
    
    // Gets or sets a value indicating whether to leave the stream open after
    // the IExcelDataReader object is disposed. Default: false
    LeaveOpen = false,
    
    // Gets or sets a value indicating the number of rows to analyze for
    // encoding, separator and field count in a CSV. When set, this option
    // causes the IExcelDataReader.RowCount property to throw an exception.
    // Default:  @abstr_number  - analyzes the entire file (CSV only, has no effect on other
    // formats)
    AnalyzeInitialCsvRows =  @abstr_number ,
    

}); @abstr_code_section c# var result = reader.AsDataSet(new ExcelDataSetConfiguration() { // Gets or sets a value indicating whether to set the DataColumn.DataType // property in a second pass. UseColumnDataType = true,
    
    
    // Gets or sets a callback to determine whether to include the current sheet
    // in the DataSet. Called once per sheet before ConfigureDataTable.
    FilterSheet = (tableReader, sheetIndex) => true,
    
    // Gets or sets a callback to obtain configuration options for a DataTable. 
    ConfigureDataTable = (tableReader) => new ExcelDataTableConfiguration()
    {
        // Gets or sets a value indicating the prefix of generated column names.
        EmptyColumnNamePrefix = "Column",
    
        // Gets or sets a value indicating whether to use a row from the 
        // data as column names.
        UseHeaderRow = false,
    
        // Gets or sets a callback to determine which row is the header row. 
        // Only called when UseHeaderRow = true.
        ReadHeaderRow = (rowReader) => {
            // F.ex skip the first row and use the  @abstr_number nd row as column headers:
            rowReader.Read();
        },
    
        // Gets or sets a callback to determine whether to include the 
        // current row in the DataTable.
        FilterRow = (rowReader) => {
            return true;
        },
    
        // Gets or sets a callback to determine whether to include the specific
        // column in the DataTable. Called once per column after reading the 
        // headers.
        FilterColumn = (rowReader, columnIndex) => {
            return true;
        }
    }
    

}); @abstr_code_section c# string GetFormattedValue(IExcelDataReader reader, int columnIndex, CultureInfo culture) { var value = reader.GetValue(columnIndex); var formatString = reader.GetNumberFormatString(columnIndex); if (formatString != null) { var format = new NumberFormat(formatString); return format.Format(value, culture); } return Convert.ToString(value, culture); } @abstr_code_section 'IExcelDataReader' does not contain a definition for 'AsDataSet'... 'IExcelDataReader' does not contain a definition for 'IsFirstRowAsColumnNames'... @abstr_code_section c# var result = reader.AsDataSet(new ExcelDataSetConfiguration() { ConfigureDataTable = (_) => new ExcelDataTableConfiguration() { UseHeaderRow = true } }); @abstr_code_section c# System.Text.Encoding.RegisterProvider(System.Text.CodePagesEncodingProvider.Instance); ```

This is required to parse strings in binary BIFF @abstr_number - @abstr_number Excel documents encoded with DOS-era code pages. These encodings are registered by default in the full .NET Framework, but not on .NET Core.
