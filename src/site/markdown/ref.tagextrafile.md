<h3>Extrafile Tag</h3>

<h4>Description</h4>

Allow to specify the location of a file containing a JSON-formatted DataTables configuration to merge with the generated one.

<h4>Usage</h4>

    <datatables:table>
       ...
       <datatables:extraFile src="..." />
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
    <td>src</td>
    <td>(<strong>required</strong>) Location of the file containing DataTables configuration</td>
    <td>java.lang.String</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>insert</td>
    <td>Specify where the extra file must be inserted</td>
    <td>java.lang.String</td>
    <td>BEFOREALL | AFTERSTARTDOCUMENTREADY | BEFORENDDOCUMENTREADY | AFTERALL</td>
    <td>BEFOREALL</td>
  </tr>
  </tbody>
</table>

<link rel="stylesheet" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.4/css/jquery.dataTables.css" />
<link rel="stylesheet" href="./css/tabletag.css" />
<script src="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.4/jquery.dataTables.min.js" ></script>
<script src="./js/datatables.fixedheader.min.js" ></script>
<script src="./js/tagreference.js" ></script>