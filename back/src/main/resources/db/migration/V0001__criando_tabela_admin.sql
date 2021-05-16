create table admin(
	id bigint not null auto_increment,
	cpf varchar(11) not null,
    senha varchar(20) not null,
    
    primary key(id)
);