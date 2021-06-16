create view relatorio as
select id, pergunta, questao, total_perguntas, round(soma_respostas/total_perguntas,2) media_total, menor_resposta, maior_resposta
from
(select a.id, a.pergunta, q.questao, count(a.pergunta) total_perguntas, sum(a.resposta) soma_respostas, min(a.resposta) menor_resposta, max(a.resposta) maior_resposta
from avaliacao a, questao q
where a.pergunta = q.pergunta
group by pergunta) cria_relatorio;