# Classe de conexão PDO

//[INI] Referente ao arquivo classe de conexão com o postgresql --------------------------------------------------------

Classe de conexão com o banco Postgresql. Mantenha os créditos do autor por favor.

Não houve muito tempo para desenvolver a classe, caso alguém tenha alguma sugestão de melhora, mande para o e-mail que contém no código fonte.

Uso Básico:
    
    
        $DB = New DBE();
    
        $DB->Query($query);
    
        $DB->Fetch (tipo_fetch); ou $DB->Fetch ();
    
        $DB->LastId();
    
        $DB->Rows();
    
        $DB->RollBack();
    

# Classe que exibe dia da semana por extenso

Exemplo prático: 
    
    
        echo NomeDaSuaClasse::dataPorExtenso($data,"dia");
    

# Classe de conversão de timestamps

Uso prático:
    
    
        Formato para  inserir no banco:
    
                nomedasuaclasse::dateToDB(" @abstr_number / @abstr_number / @abstr_number ") //  @abstr_number - @abstr_number - @abstr_number 
                nomedasuaclasse::dateToDB(" @abstr_number / @abstr_number / @abstr_number   @abstr_number : @abstr_number : @abstr_number ") //  @abstr_number - @abstr_number - @abstr_number   @abstr_number : @abstr_number : @abstr_number 
    
        Formato de exibição(PT-BR):
    
                nomedasuaclasse::dateToDB(" @abstr_number - @abstr_number - @abstr_number ") //  @abstr_number / @abstr_number / @abstr_number 
                nomedasuaclasse::dateToDB(" @abstr_number - @abstr_number - @abstr_number   @abstr_number : @abstr_number : @abstr_number ") //  @abstr_number / @abstr_number / @abstr_number   @abstr_number : @abstr_number : @abstr_number
    
