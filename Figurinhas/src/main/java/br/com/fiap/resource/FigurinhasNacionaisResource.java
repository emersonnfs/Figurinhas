package br.com.fiap.resource;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriBuilder;
import javax.ws.rs.core.UriInfo;

import br.com.fiap.bo.FigurinhasNacionaisBO;
import br.com.fiap.to.FigurinhasNacionaisTO;

@Path("/figurinhas-nacionais")
public class FigurinhasNacionaisResource {
	FigurinhasNacionaisBO fnb=new FigurinhasNacionaisBO();
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<FigurinhasNacionaisTO> listarFigurinhasNacionais(){
		return fnb.listar();
	}
}
