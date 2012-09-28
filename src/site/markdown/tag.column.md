<h3>Column tag</h3>

<h4>Description</h4>

Describe a column of the HTML table.

<h4>Usage</h4>

You can either let the <code>property</code> attribute handle the content of a cell. As a result, the <code>column</code> tag doesn't need a body. 

    <datatables:column title="..." property="..." />
    
Or you set a body and put anything inside. See the <code>row</code> table attribute which may be useful in that case.

    <datatables:column title="...">
        <%-- Some HTML code or EL expression --%>
    </datatables>

<h4>Reference</h4>

<table id="tagReference" class="table table-striped table-bordered">
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
    <td>Column title</td>
    <td>java.lang.String</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>property</td>
    <td>Name of the attribute of the current object being iterated object on, regardless the data source (DOM or AJAX)</td>
    <td>java.lang.String</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>sortable</td>
    <td>Enable or disable sorting on column</td>
    <td>java.lang.Boolean</td>
    <td>true|false</td>
    <td>true</td>
  </tr>
  <tr>
    <td>filterable</td>
    <td>Enable or disable filtering on column</td>
    <td>java.lang.Boolean</td>
    <td>true|false</td>
    <td>true</td>
  </tr>
  <tr>
    <td>cssStyle</td>
    <td>CSS style applied on header cell (<code>th</code> tag)</td>
    <td>java.lang.String</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>cssCellStyle</td>
    <td>CSS style applied on every table cell (<code>td</code> tag)</td>
    <td>java.lang.String</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>cssClass</td>
    <td>CSS class applied on header cell (<code>th</code> tag)</td>
    <td>java.lang.String</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>cssCellClass</td>
    <td>CSS class applied on every table cell (<code>td</code> tag)</td>
    <td>java.lang.String</td>
    <td></td>
    <td></td>
  </tr>
  </tbody>
</table>

<link rel="stylesheet" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.4/css/jquery.dataTables.css" />
<link rel="stylesheet" href="./css/tabletag.css" />
<script src="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.4/jquery.dataTables.min.js" ></script>
<script src="./js/datatables.fixedheader.min.js" ></script>
<script src="./js/tagreference.js" ></script>