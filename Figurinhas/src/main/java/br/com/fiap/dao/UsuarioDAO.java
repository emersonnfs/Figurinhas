package br.com.fiap.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import br.com.fiap.factory.ConnectionFactory;
import br.com.fiap.to.UsuarioTO;

public class UsuarioDAO {
	private Connection conn = null;
	
	public UsuarioDAO() {
		this.conn = new ConnectionFactory().getConnection();
	}
	
	public UsuarioTO loginDAO( UsuarioTO u ) {
		// Aqui vamos validar e retornar os dados que vem do banco
		
		PreparedStatement preparedStatement = null;
		String query = "SELECT * FROM T_USER_RWD WHERE NM_USER = ? AND ST_PASSWORD = ?";
		
		try {
			preparedStatement = conn.prepareStatement( query );
			
			preparedStatement.setString(1, u.getLogin());
			preparedStatement.setString(2, u.getSenha());
			
			ResultSet result = preparedStatement.executeQuery();
			
			UsuarioTO uto = null;
			
			while( result.next() ) {
				uto = new UsuarioTO();
				uto.setLogin( result.getString(1) );
				uto.setSenha( result.getString(2) );
			}
			
			if( uto != null ) {
				result.close();
				preparedStatement.close();
				conn.close();
				
				
				
			System.out.println("O usuário " + uto.getLogin() + " Logou");
				return uto;
			}
						
		} catch ( SQLException e ) {
			e.printStackTrace();
		} catch(Exception e) {
            System.out.println(e);
		}
		
		System.out.println("O usuário " + u.getLogin() + " Não Logou");
		return null;
	}
}
