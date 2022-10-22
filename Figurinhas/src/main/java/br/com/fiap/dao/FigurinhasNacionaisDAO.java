package br.com.fiap.dao;
import java.util.ArrayList;
import java.util.List;

import br.com.fiap.to.FigurinhasNacionaisTO;

public class FigurinhasNacionaisDAO {
	public static List<FigurinhasNacionaisTO> listaFigurinhasNacional;
	public FigurinhasNacionaisDAO() {
		if(listaFigurinhasNacional==null) {
			listaFigurinhasNacional=new ArrayList<FigurinhasNacionaisTO>();
			FigurinhasNacionaisTO fn = new FigurinhasNacionaisTO();
			fn.setId(1);
			fn.setNome("Alisson");
			fn.setPosicao("Goleiro");
			fn.setTime("Liverpool");
			listaFigurinhasNacional.add(fn);
			
			fn = new FigurinhasNacionaisTO();
			fn.setId(2);
			fn.setNome("Danilo");
			fn.setPosicao("Lateral-Direita");
			fn.setTime("Juventus");
			listaFigurinhasNacional.add(fn);
			
			fn = new FigurinhasNacionaisTO();
			fn.setId(3);
			fn.setNome("Thiago Silva");
			fn.setPosicao("Zagueiro");
			fn.setTime("Chelsea");
			listaFigurinhasNacional.add(fn);
			
			fn = new FigurinhasNacionaisTO();
			fn.setId(4);
			fn.setNome("Marquinhos");
			fn.setPosicao("Zagueiro");
			fn.setTime("PSG");
			listaFigurinhasNacional.add(fn);
			
			fn = new FigurinhasNacionaisTO();
			fn.setId(5);
			fn.setNome("Alex Sandro");
			fn.setPosicao("Lateral-Esquerdo");
			fn.setTime("Juventus");
			listaFigurinhasNacional.add(fn);
			
			fn = new FigurinhasNacionaisTO();
			fn.setId(6);
			fn.setNome("Casemiro");
			fn.setPosicao("Volante");
			fn.setTime("Manchester United");
			listaFigurinhasNacional.add(fn);
			
			fn = new FigurinhasNacionaisTO();
			fn.setId(7);
			fn.setNome("Lucas Paquetá");
			fn.setPosicao("Meio-Campo");
			fn.setTime("West Ham");
			listaFigurinhasNacional.add(fn);
			
			fn = new FigurinhasNacionaisTO();
			fn.setId(8);
			fn.setNome("Neymar Jr.");
			fn.setPosicao("Atacante");
			fn.setTime("PSG");
			listaFigurinhasNacional.add(fn);
			
			fn = new FigurinhasNacionaisTO();
			fn.setId(9);
			fn.setNome("Raphinha");
			fn.setPosicao("Ponta-Direito");
			fn.setTime("Barcelona");
			listaFigurinhasNacional.add(fn);
			
			fn = new FigurinhasNacionaisTO();
			fn.setId(10);
			fn.setNome("Vinícius Jr.");
			fn.setPosicao("Ponta-Esquerdo");
			fn.setTime("Real Madrid");
			listaFigurinhasNacional.add(fn);
			
			fn = new FigurinhasNacionaisTO();
			fn.setId(11);
			fn.setNome("Richarlison");
			fn.setPosicao("Atacante");
			fn.setTime("Tottenham");
			listaFigurinhasNacional.add(fn);
		}
	}
	
	public List<FigurinhasNacionaisTO> select(){
		return listaFigurinhasNacional;
	}
}
