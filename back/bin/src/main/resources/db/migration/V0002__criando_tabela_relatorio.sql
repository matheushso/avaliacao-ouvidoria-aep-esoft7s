create table relatorio(
	id bigint not null auto_increment,
	data date not null,
    media_geral int not null,
    admin_id bigint not null,
    
    primary key(id)
);

alter table relatorio add constraint fk_relatorio_admin
foreign key (admin_id) references admin (id);