package br.com.fiap.bo;

import java.util.List;

import br.com.fiap.dao.FigurinhasNacionaisDAO;
import br.com.fiap.to.FigurinhasNacionaisTO;

public class FigurinhasNacionaisBO {
	private FigurinhasNacionaisDAO fnd;
	
	public List<FigurinhasNacionaisTO> listar() {
		fnd = new FigurinhasNacionaisDAO();
		return fnd.select();
	}
}
