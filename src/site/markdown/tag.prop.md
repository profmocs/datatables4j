<h3>Prop tag</h3>

<h4>Description</h4>

Allow to override a property normally defined in the DataTables4j properties file.

<h4>Usage</h4>
    
    <datatables:table>
       ...
       <datatables:prop name="property.name" value="property.value" />
       ...
    </datatables:table>
    
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
    <td>name</td>
    <td><strong>(required)</strong> Name of the property to override</td>
    <td>java.lang.String</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>value</td>
    <td><strong>(required)</strong> Value of the property to override. See (lien vers liste des propriétés)</td>
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