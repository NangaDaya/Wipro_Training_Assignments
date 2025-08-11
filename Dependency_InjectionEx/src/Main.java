
public class Main {
	public static void main(String[] args) {
		Customer c = new Customer();
		c.setSno(1);
		c.setName("Daya");
		c.setEmail("dhaya@gmail.com");
		
		System.out.println(c);
		
		Address addr = new Address();
		addr.setDoorno(1);
		addr.setCityName("Hyderabad");
		addr.setStreetAddr("MG Road");
		addr.setPincode("50001");
		
		System.out.println(addr);
	}

}
