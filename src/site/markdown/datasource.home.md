<h3>Data sources</h3>

For now, <strong>DataTables4j</strong> supports 2 types of data source : 

 * [DOM data source](./datasource.dom.html "DOM data source")
 * [AJAX data source](./datasource.ajax.html "AJAX data source")
 
<br />
Note that in all examples, we consider that a List of <i>Person</i> has been set as request attribute, with <i>Person</i> defined as :

<h6>Person.java</h6>

    public class Person {
		private Long id;
		private String firstName;
		private String lastName;
		private String mail
		private Address address;
		// getters and setters
	}

<h6>Address.java</h6>
 
	public class Address {
		private String street1;
		private String street2;
		private Town town;
		// getters and setters
	}
 
<h6>Town.java</h6>
 
	public class Town {
		private String label;
		private String postcode;
		// getters and setters
	}
	
