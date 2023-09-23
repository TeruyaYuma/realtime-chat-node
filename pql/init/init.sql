create table if not exists members(
    id serial primary key,
    name text,
    age int
);

insert into members(name,age) values('hoge',10);