# Column tag #

## Usage ##

    <datatables:column>

## Reference ##

<table id="myTable" class="table table-striped table-bordered">
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Value(s)</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>title</td>
    <td>(required) DOM id of the HTML table</td>
    <td>java.lang.String</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>property</td>
    <td>(Either data or url attribute is required) Collection of data used to populate the table</td>
    <td>java.lang.Object</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>sortable</td>
    <td>(Either data or url attribute is required) Web service URL used to populate the table</td>
    <td>java.lang.String</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>filterable</td>
    <td>Name of the object representing the current row. If data must be displayed without any decoration, use <em>property</em> attribute on column tag</td>
    <td>java.lang.String</td>
    <td>none</td>
    <td>none</td>
  </tr>
  <tr>
    <td>cssStyle</td>
    <td>Enable the DataTables source files to be loaded from the Microsoft CDN (Content Delivery Framework) preventing you from hosting the files yourself.</td>
    <td>java.lang.String</td>
    <td>true|false</td>
    <td>false</td>
  </tr>
  <tr>
    <td>cssCellStyle</td>
    <td>CSS style applied on the HTML table (HTML style attribute)</td>
    <td>java.lang.String</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>cssClass</td>
    <td>CSS class(es) applied on the HTML table (HTML class attribute)</td>
    <td>java.lang.String</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>cssCellClass</td>
    <td>Useful if you want each row has a DOM id. This attribute is evaluated as a property of the current iterated bean (Only if DOM datasource)</td>
    <td>java.lang.String</td>
    <td></td>
    <td></td>
  </tr>
  </tbody>
</table>