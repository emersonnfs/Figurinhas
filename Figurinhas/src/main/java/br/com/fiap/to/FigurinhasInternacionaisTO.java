package br.com.fiap.to;

public class FigurinhasInternacionaisTO {
	int id;
	private String nome,posicao,time;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getPosicao() {
		return posicao;
	}
	public void setPosicao(String posicao) {
		this.posicao = posicao;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public FigurinhasInternacionaisTO() {
		
	}
	public FigurinhasInternacionaisTO( int id,String nome,String posicao,String time) {
		this.id=id;
		this.nome=nome;
		this.posicao=posicao;
		this.time=time;
	}
}
