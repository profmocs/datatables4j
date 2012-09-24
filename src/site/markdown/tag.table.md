# Table tag #

## Usage ## 

    <datatables:table>
       ...
    </datatables:table>

Warning : the table tag must have a body.

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
    <td colspan="5" style="text-align: center; background-color: #CDCDCD;">DataTables</td>
  </tr>
  <tr>
    <td>id</td>
    <td><strong>(required)</strong> DOM id of the HTML table</td>
    <td>java.lang.String</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>data</td>
    <td><strong>(Either data or url attribute is required)</strong> Collection of data used to populate the table</td>
    <td>java.lang.Object</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>url</td>
    <td><strong>(Either data or url attribute is required)</strong> Web service URL used to populate the table</td>
    <td>java.lang.String</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>row</td>
    <td>Name of the object representing the current row. If data must be displayed without any decoration, use <em>property</em> attribute on column tag</td>
    <td>java.lang.String</td>
    <td>none</td>
    <td>none</td>
  </tr>
  <tr>
    <td>cdn</td>
    <td>Enable the DataTables source files to be loaded from the Microsoft CDN (Content Delivery Framework) preventing you from hosting the files yourself.</td>
    <td>java.lang.String</td>
    <td>true|false</td>
    <td>false</td>
  </tr>
  <tr>
    <td>cssStyle</td>
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
    <td>rowIdBase</td>
    <td>Useful if you want each row has a DOM id. This attribute is evaluated as a property of the current iterated bean (Only if DOM datasource)</td>
    <td>java.lang.String</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>rowIdPrefix</td>
    <td>String which is prepended to the rowIdBase attribute, in order to build row id (HTML id attribute)</td>
    <td>java.lang.String</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>rowIdSufix</td>
    <td>String which is appended to the rowIdBase attribute, in order to build row id (HTML id attribute)</td>
    <td>java.lang.String</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td colspan="5" style="text-align: center; background-color: #CDCDCD;">Basic features</td>
  </tr>
  <tr>
    <td>info</td>
    <td>Enable or disable the table information display. This shows information about the data that is currently visible on the page, including information about filtered data if that action is being performed</td>
    <td>java.lang.String</td>
    <td>true|false</td>
    <td>true</td>
  </tr>
  <tr>
    <td>paginate</td>
    <td>Enable or disable pagination</td>
    <td>java.lang.String</td>
    <td>true|false</td>
    <td>true</td>
  </tr>
  <tr>
    <td>lengthPaginate</td>
    <td>If paginate is enabled, allows the end user to select the size of a formatted page from a select menu (sizes are 10, 25, 50 and 100)</td>
    <td>java.lang.String</td>
    <td>true|false</td>
    <td>true</td>
  </tr>
  <tr>
    <td>paginationType</td>
    <td>Choice between the two different built-in pagination interaction methods ('two_button' or 'full_numbers') which present different page controls to the end user</td>
    <td>java.lang.String</td>
    <td>two_button|full_numbers</td>
    <td>two_button</td>
  </tr>
  <tr>
    <td>filter</td>
    <td>TODO</td>
    <td>java.lang.String</td>
    <td>true|false</td>
    <td>true</td>
  </tr>
  <tr>
    <td>sort</td>
    <td>Enable or disable sorting of columns. Sorting of individual columns can be disabled by the "sortable" attribute of column tag</td>
    <td>java.lang.String</td>
    <td>true|false</td>
    <td>true</td>
  </tr>
  <tr>
    <td>autoWidth</td>
    <td>Enable or disable automatic column width calculation</td>
    <td>java.lang.String</td>
    <td>true|false</td>
    <td>true</td>
  </tr>
  <tr>
    <td>processing</td>
    <td>Enable or disable the display of a 'processing' indicator when the table is being processed (e.g. a sort). This is particularly useful for tables with large amounts of data where it can take a noticeable amount of time to sort the entries</td>
    <td>java.lang.String</td>
    <td>true|false</td>
    <td>false</td>
  </tr>
  <tr>
    <td colspan="5" style="text-align: center; background-color: #CDCDCD;">Plugin</td>
  </tr>
  <tr>
    <td>fixedHeader</td>
    <td>Enable or disable the DataTables FixedHeader plugin</td>
    <td>java.lang.Boolean</td>
    <td>true|false</td>
    <td>false</td>
  </tr>
  <tr>
    <td>fixedPosition</td>
    <td>Respectively fix the header, footer, left column, right column</td>
    <td>java.lang.String</td>
    <td>(top|bottom|left|right</td>
    <td>top</td>
  </tr>
  <tr>
    <td>scroller</td>
    <td>Enable or disable the DataTables Scroller plugin</td>
    <td>java.lang.Boolean</td>
    <td>true|false</td>
    <td>false</td>
  </tr>
  <tr>
    <td>scrollY</td>
    <td>TODO</td>
    <td>java.lang.String</td>
    <td></td>
    <td>200px</td>
  </tr>
  <tr>
    <td>colReorder</td>
    <td>Enable or disable the DataTables ColReorder plugin</td>
    <td>java.lang.Boolean</td>
    <td>true|false</td>
    <td>false</td>
  </tr>
  </tbody>
</table>