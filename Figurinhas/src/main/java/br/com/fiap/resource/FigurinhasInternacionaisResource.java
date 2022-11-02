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

import br.com.fiap.bo.FigurinhasInternacionaisBO;
import br.com.fiap.to.FigurinhasInternacionaisTO;

@Path("/figurinhas-internacionais")
public class FigurinhasInternacionaisResource {
	FigurinhasInternacionaisBO fib = new FigurinhasInternacionaisBO();
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<FigurinhasInternacionaisTO> listarFigurinhasInternacionais(){
		return fib.listar();
	}
}
