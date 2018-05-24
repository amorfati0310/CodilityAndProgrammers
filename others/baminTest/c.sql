
create table teams (
      team_id integer not null,
      team_name varchar(30) not null,
      unique(team_id)
) 

create table matches (
       match_id integer not null,
      host_team integer not null,
      guest_team integer not null,
      host_goals integer not null,
      guest_goals integer not null,
      unique(match_id)
) 

SELECT COUNT(*) 
FROM match_mast 
WHERE decided_by='P' AND play_stage='R';