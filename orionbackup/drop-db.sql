DECLARE
        username VARCHAR2(4000);
        instanceName VARCHAR2(4000);
        isDba NUMBER(19);
        nonTsTableCount NUMBER(19);
BEGIN
        dbms_output.enable(900000);

        SELECT user into username from global_name;
        select sys_context('USERENV','DB_NAME') into instanceName from dual;
        select count(*) into isDba from user_role_privs where GRANTED_ROLE='DBA';
        select count(1) into nonTsTableCount from user_tables where tablespace_name NOT LIKE 'TS%';

          dbms_output.put_line('Dropping ' || username || ' database');
          FOR rec IN (SELECT tname FROM tab WHERE tabtype = 'VIEW')
          LOOP
            EXECUTE IMMEDIATE ('drop view "'|| rec.tname ||'"');
            dbms_output.put_line('Dropping view ' || rec.tname);
          END LOOP;

          FOR rec IN (SELECT tname FROM tab WHERE tname NOT LIKE 'BIN$%')
          LOOP
            EXECUTE IMMEDIATE ('drop table "'|| rec.tname ||'" cascade constraints purge');
            dbms_output.put_line('Dropping table ' || rec.tname);
          END LOOP;
          COMMIT;

          FOR rec IN (SELECT sequence_name FROM seq)
          LOOP
            EXECUTE IMMEDIATE ('drop sequence "' || rec.sequence_name || '"');
            dbms_output.put_line('Dropping sequence ' || rec.sequence_name);
          END LOOP;
END;
/
