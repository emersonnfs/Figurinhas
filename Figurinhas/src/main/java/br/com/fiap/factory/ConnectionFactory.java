package br.com.fiap.factory;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConnectionFactory {
	private Connection conn = null;
	
	public Connection getConnection() {
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");	
			conn = DriverManager.getConnection("jdbc:oracle:thin:@oracle.fiap.com.br:1521:ORCL", "rm95535", "140301");
			
			return conn;
		} catch (Exception e) {
			System.out.println("Falhou aqui");
		}
		
		return null;
	}
}