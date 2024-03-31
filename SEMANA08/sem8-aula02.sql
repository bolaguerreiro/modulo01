create table Autores (
	id serial primary key,
	nome varchar(100) not null,
	nacionalidade varchar(100) not null,
	ano_nascimento int not null
);

create table editoras (
	id serial primary key,
	nome varchar(100) not null,
	pais varchar (100) not null,
	fundacao date not null
);

create table biblioteca (
	id serial primary key,
	nome varchar(100) not null,
	cidade varchar (100) not null	
);

create table livros (
	id serial primary key,
	titulo varchar(200) not null,
	ano_publicacao int not null,
	autor_id int not null,
	editora_id int not null,
	biblioteca_id int,
	foreign key (autor_id) references autores (id),
	foreign key (editora_id) references editoras (id),
	foreign key (biblioteca_id) references biblioteca (id)
);

insert into autores (nome, nacionalidade, ano_nascimento) 
values ('Sergio', 'Brasileira', 1945);
insert into autores (nome, nacionalidade, ano_nascimento) 
values ('Carlos Drumont', 'Brasileira', 2001);
insert into autores (nome, nacionalidade, ano_nascimento) 
values ('Cecilia', 'Brasileira', 1835);
insert into autores (nome, nacionalidade, ano_nascimento) 
values ('Toller', 'Brasileira', 1998);
insert into autores (nome, nacionalidade, ano_nascimento) 
values ('ricardo', 'Brasileira', 1965);

-- EDITORAS
insert into editoras (nome, pais, fundacao) values ('Abril', 'Brasil', '1980-01-01');
insert into editoras (nome, pais, fundacao) values ('Saraiva', 'Brasil', '1970-01-01');
insert into editoras (nome, pais, fundacao) values ('Novatech', 'Brasil', '1960-01-01');

-- BIBLIOTECAS
insert into biblioteca (nome, cidade) values ('Biblioteca Estadual Catarinense', 'Floripa');
insert into biblioteca (nome, cidade) values ('Biblioteca Estadual Cearense', 'Fortaleza');
insert into biblioteca (nome, cidade) values ('Biblioteca Estadual Paulista', 'São Paulo');
insert into biblioteca (nome, cidade) values ('Biblioteca Estadual Carioca', 'Rio de Janeiro');

insert into livros (titulo, ano_publicacao, autor_id, editora_id, biblioteca_id)
values ('O que é POO', 2020, 1, 2, null);
insert into livros (titulo, ano_publicacao, autor_id, editora_id, biblioteca_id)
values ('O que é Javascript', 2023, 2, 1, 1);
insert into livros (titulo, ano_publicacao, autor_id, editora_id, biblioteca_id)
values ('Como trabalhar com testes unitários', 2024, 3, 3, 2);
insert into livros (titulo, ano_publicacao, autor_id, editora_id, biblioteca_id)
values ('Entendendo TDD', 2010, 2, 1, 4);
insert into livros (titulo, ano_publicacao, autor_id, editora_id, biblioteca_id)
values ('HTML e CSS', 2019, 1, 3, null);

-- inner join --
select * from livros as l inner join biblioteca as b
on l.biblioteca_id = b.id

select * from livros as l left join biblioteca as b
on l.biblioteca_id = b.id
select * from livros as l right join biblioteca as b
on l.biblioteca_id = b.id

create table locais (
	id serial primary key,
	nome varchar(100) not null,
	endereco varchar(100) not null,
	capacidade int,
	check(capacidade >=1)
);

create table eventos (
	id serial primary key,
	nome varchar(100) not null,
	data_evento date not null,
	check (data_evento > current_date),
	local_id int,
	ativo boolean not null default true,
	foreign key (local_id) references locais(id)	
);

insert into locais (nome, endereco, capacidade) values ('P12', 'Jurere Internacional', 15000);
insert into locais (nome, endereco, capacidade) values ('Indaiá Eventos', 'Lagoa', 150);
insert into locais (nome, endereco, capacidade) values ('Fazendinha Eventos', 'Biguacu', 250);

insert into eventos (nome, data_evento, local_id, ativo)
values ('Niver Casamento', '15-04-2024', 1, true)

insert into eventos (nome, data_evento, local_id, ativo)
values ('Show Jotaquest', '07-06-2024', 1, true);
insert into eventos (nome, data_evento, local_id, ativo)
values ('Stand-up Anderson Nunes', '06-09-2024', 2, true);
insert into eventos (nome, data_evento, local_id, ativo)
values ('Aniversario Davi', '08-12-2024', 3, true);

select * from eventos as e inner join locais as l on e.local_id = l.id

select
l.nome as nome_local,
l.endereco as endereco_local,
l.capacidade,
e.nome as nome_evento,
e.data_evento,
e.ativo
from locais as l inner join eventos as e on l.id = e.local_id;