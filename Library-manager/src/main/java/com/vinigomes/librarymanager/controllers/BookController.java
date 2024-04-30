package com.vinigomes.librarymanager.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vinigomes.librarymanager.model.Book;
import com.vinigomes.librarymanager.services.BookService;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping(value = "/books")
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {
	
	@Autowired
	private BookService service;
	
	@GetMapping
	private String Rotas() {
		return "Rotas: /all, /{codigo}, /register, /edit";
	}
	
	@GetMapping("/all")
	public ResponseEntity<?> SelecionarTodos(){
		return service.SelecionarTodos();
	}
	
	
	@GetMapping("/{codigo}")
	public ResponseEntity<?> SelecionarPorCodigo(@PathVariable int codigo) {
		return service.SelecionarPorCodigo(codigo);
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> Cadastrar(@RequestBody Book obj){
		return service.Cadastrar(obj);
	}
	
	@PutMapping("/edit")
	public ResponseEntity<?> Editar(@RequestBody Book obj){
		return service.Editar(obj);
	}
	
	@DeleteMapping("/delete/{codigo}")
	public ResponseEntity<?> Deletar(@PathVariable int codigo){
		return service.Remover(codigo);
	}
	
}
