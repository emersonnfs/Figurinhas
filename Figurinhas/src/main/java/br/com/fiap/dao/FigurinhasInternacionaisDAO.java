package br.com.fiap.dao;
import java.util.ArrayList;
import java.util.List;

import br.com.fiap.to.FigurinhasInternacionaisTO;
public class FigurinhasInternacionaisDAO {
	public static List<FigurinhasInternacionaisTO> listaFigurinhasInternacional;
	public FigurinhasInternacionaisDAO() {
		if(listaFigurinhasInternacional==null) {
			listaFigurinhasInternacional=new ArrayList<FigurinhasInternacionaisTO>();
			FigurinhasInternacionaisTO fi= new FigurinhasInternacionaisTO();
			fi.setId(1);
			fi.setNome("Courtois");
			fi.setPosicao("Goleiro");
			fi.setTime("Real Madrid");
			listaFigurinhasInternacional.add(fi);
			
			fi= new FigurinhasInternacionaisTO();
			fi.setId(2);
			fi.setNome("Alexander-Arnold");
			fi.setPosicao("Lateral-Direita");
			fi.setTime("Liverpool");
			listaFigurinhasInternacional.add(fi);
			
			fi= new FigurinhasInternacionaisTO();
			fi.setId(3);
			fi.setNome("van Dijk");
			fi.setPosicao("Zagueiro");
			fi.setTime("Liverpool");
			listaFigurinhasInternacional.add(fi);
			
			fi= new FigurinhasInternacionaisTO();
			fi.setId(4);
			fi.setNome("Ruben Dias");
			fi.setPosicao("Zagueiro");
			fi.setTime("Manchester City");
			listaFigurinhasInternacional.add(fi);
			
			fi= new FigurinhasInternacionaisTO();
			fi.setId(5);
			fi.setNome("Davies");
			fi.setPosicao("Lateral-Esquerdo");
			fi.setTime("Bayer de Munique");
			listaFigurinhasInternacional.add(fi);
			
			fi= new FigurinhasInternacionaisTO();
			fi.setId(6);
			fi.setNome("Kimmich");
			fi.setPosicao("Volante");
			fi.setTime("Bayer de Munique");
			listaFigurinhasInternacional.add(fi);
			
			fi= new FigurinhasInternacionaisTO();
			fi.setId(7);
			fi.setNome("De Bruyne");
			fi.setPosicao("Meio-Campo");
			fi.setTime("Manchester City");
			listaFigurinhasInternacional.add(fi);
			
			fi= new FigurinhasInternacionaisTO();
			fi.setId(8);
			fi.setNome("Modrić");
			fi.setPosicao("Meio-Campo");
			fi.setTime("Real Madrid");
			listaFigurinhasInternacional.add(fi);
			
			fi= new FigurinhasInternacionaisTO();
			fi.setId(9);
			fi.setNome("Messi");
			fi.setPosicao("Atacante");
			fi.setTime("PSG");
			listaFigurinhasInternacional.add(fi);
			
			fi= new FigurinhasInternacionaisTO();
			fi.setId(10);
			fi.setNome("Cristiano Ronaldo");
			fi.setPosicao("Atacante");
			fi.setTime("Manchester United");
			listaFigurinhasInternacional.add(fi);
			
			fi= new FigurinhasInternacionaisTO();
			fi.setId(11);
			fi.setNome("Benzema");
			fi.setPosicao("Atacante");
			fi.setTime("Real Madrid");
			listaFigurinhasInternacional.add(fi);
		}
		
		
	}
	public List<FigurinhasInternacionaisTO> select(){
		return listaFigurinhasInternacional;
	}
}
