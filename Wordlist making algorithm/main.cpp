#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    int p,n;
    string s;
    ifstream fin("csw15.txt");
    while(getline(fin,s)){
        for(int i=0;i<s.length();i++){
            if(s[i]=='\t'){
                p=i;
                break;
            }
        }
        string word=s.substr(0,p);

        int k=s.length()-p;
        string definition=s.substr(p+1,k-1);

        if(word.length()==2){
            ofstream fout("twos.txt",ios::app);
            fout<<"[\""<<word<<"\",\""<<definition<<"\"],"<<"\n";
        }

        if(word.length()==3){
            ofstream fout("threes.txt",ios::app);
            fout<<"[\""<<word<<"\",\""<<definition<<"\"],"<<"\n";

        }

        if(word.length()==4){
            ofstream fout("fours.txt",ios::app);
            fout<<"[\""<<word<<"\",\""<<definition<<"\"],"<<"\n";

        }

        if(word.length()==5){
            ofstream fout("fives.txt",ios::app);
            fout<<"[\""<<word<<"\",\""<<definition<<"\"],"<<"\n";

        }

        if(word.length()==6){
            ofstream fout("sixes.txt",ios::app);
            fout<<"[\""<<word<<"\",\""<<definition<<"\"],"<<"\n";

        }

        if(word.length()==7){
            ofstream fout("sevens.txt",ios::app);
            fout<<"[\""<<word<<"\",\""<<definition<<"\"],"<<"\n";

        }

        if(word.length()==8){
            ofstream fout("eights.txt",ios::app);
            fout<<"[\""<<word<<"\",\""<<definition<<"\"],"<<"\n";

        }

        if(word.length()==9){
            ofstream fout("nines.txt",ios::app);
            fout<<"[\""<<word<<"\",\""<<definition<<"\"],"<<"\n";

        }

        if(word.length()==10){
            ofstream fout("tens.txt",ios::app);
            fout<<"[\""<<word<<"\",\""<<definition<<"\"],"<<"\n";

        }

        if(word.length()==11){
            ofstream fout("elevens.txt",ios::app);
            fout<<"[\""<<word<<"\",\""<<definition<<"\"],"<<"\n";

        }

        if(word.length()==12){
            ofstream fout("twelves.txt",ios::app);
            fout<<"[\""<<word<<"\",\""<<definition<<"\"],"<<"\n";

        }

        if(word.length()==13){
            ofstream fout("thirteens.txt",ios::app);
            fout<<"[\""<<word<<"\",\""<<definition<<"\"],"<<"\n";

        }

        if(word.length()==14){
            ofstream fout("fourteens.txt",ios::app);
            fout<<"[\""<<word<<"\",\""<<definition<<"\"],"<<"\n";

        }

        if(word.length()==15){
            ofstream fout("fifteens.txt",ios::app);
            fout<<"[\""<<word<<"\",\""<<definition<<"\"],"<<"\n";

        }

   }

}
