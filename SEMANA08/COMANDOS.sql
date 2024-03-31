-- criacao Departamento --
create table Departamento (
	idDepartamento serial primary key,
	nome varchar(60) not null,
	dataCriacao date not null);
	
-- criar 3 registros na tabela Departamento --	
insert into Departamento (nome, dataCriacao) values ('Financeiro','15/04/1996')
insert into Departamento (nome, dataCriacao) values ('Comercial','10/08/1996')
insert into Departamento (nome, dataCriacao) values ('Marketing','01/06/1996')
select * from Departamento
-- APAGAR TABELA INTEIRA --
drop table Produto

create table Funcionarios (
	id serial primary key,
	nome varchar(80) not null,
	idade int not null,
	cargo varchar(50) not null,
	salario decimal (10, 2) not null,
	idDepartamento int not null,
	foreign key (idDepartamento)  
	references Departamento(idDepartamento));
	
-- criar 3 registros na tabela Funcionarios

insert into Funcionarios (nome, idade, cargo, salario, idDepartamento) 
values ('Rodrigo Souza', 19, 'Vendas', 7500.00, 2)

insert into Funcionarios (nome, idade, cargo, salario, idDepartamento) 
values ('Ricardo Guerreiro', 58, 'Diretor', 15000.00, 1)

insert into Funcionarios (nome, idade, cargo, salario, idDepartamento) 
values ('Daiane Rosa', 30, 'Diretor', 9500.00, 3)

insert into Funcionarios (nome, idade, cargo, salario, idDepartamento) 
values ('Rosalina EStrovilda', 19, 'Vendedora', 3500.00, 3)

select Funcionarios.nome, Funcionarios.cargo, Departamento.nome from Funcionarios 
Inner join Departamento on Departamento.idDepartamento = Funcionarios.idDepartamento;

-- utilizar update --

update departamento set nome = 'Ti e Inovação' where idDepartamento = 2
update funcionarios set idade = 57 where nome = 'Ricardo Guerreiro'

select * from funcionarios
select * from departamento

-- Excluir um registro --

delete from funcionarios where idDepartamento = 2;
delete from Departamento WHERE idDepartamento = 2;

delete from Funcionarios where idDepartamento in (select idDepartamento from Departamento where idDepartamento = 3);
delete from Departamento where idDepartamento = 3;

-- excluir tabela --

drop table departamento;
drop table funcionarios;



