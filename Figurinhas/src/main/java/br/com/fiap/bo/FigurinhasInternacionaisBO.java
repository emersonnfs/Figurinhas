package br.com.fiap.bo;

import java.util.List;

import br.com.fiap.to.FigurinhasInternacionaisTO;
import br.com.fiap.dao.FigurinhasInternacionaisDAO;

public class FigurinhasInternacionaisBO {
	private FigurinhasInternacionaisDAO fid;
	public List<FigurinhasInternacionaisTO> listar(){
		fid= new FigurinhasInternacionaisDAO();
		return fid.select();
	}
}
