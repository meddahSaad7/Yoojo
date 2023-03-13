import React,{useState} from 'react'
import styled from 'styled-components';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useTranslation } from 'react-i18next';
const styles={
  Icons:{
    color:'blue',
    fontSize:'17px',
    marginRight:'3px'
  }
}
const Container=styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: auto;
  align-items: center;
  height: auto;
  border-bottom: 1px solid #cbcbcb;
  direction: ${props=>props.lang==='ar'?'rtl':'ltr'};
`
const Article=styled.div`
`
const H2=styled.h2`
  width: 100%;
  margin-bottom: 20px;
`
const H3=styled.h3`
  margin: 30px 0px 10px 0px;
`
const Text=styled.p`
  color: gray;
`

const LeftArticle=styled.div`
  flex: 1;
  margin-right: 20px;
`
const RightArticle=styled.div`
  flex: 1;
`
const ArticleBlock=styled.div`
  display: flex;
  @media (max-width:500px) {
    flex-direction: column;
  }
`
const Span=styled.span`

`
const SpanReadMore=styled.span`
  color: blue;
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
`
function Stimulate() {
  const [readMore1,setReadMore1]=useState(false)
  const [readMore2,setReadMore2]=useState(false)
  const [readMore3,setReadMore3]=useState(false)
  const [t,i18n]=useTranslation()
  const lang=localStorage.getItem('lang')
  return (
    <Container lang={lang}>
      <H2>Le service entre particuliers en toute sérénité</H2>
      <Article>
        <H3>Yoojo, spécialiste des services à domicile</H3>
        <Text><ThumbUpIcon style={styles.Icons}/>
          Aujourd'hui, avec l'avènement de la consommation collaborative, il n'a jamais été aussi simple de se rendre service entre particuliers. En fait, si vous avez une petite mission à déléguer,
          faites tout simplement appel à vos voisins plutôt qu'à une grande enseigne spécialisée : bricolage, ménage, jardinage ou même déménagement, 
          {
            readMore1?
            <Span>
              de nombreux particuliers ont du temps à revendre et toutes les compétences nécessaires pour venir à bout de votre corvée en un temps record et de manière efficace et professionnelle.
              Alors, pour tous vos petits traquas du quotidien, faites confiance au jobbing. 
              Non seulement vous pourrez donner à un particulier le complément de revenu qu'il mérite, mais vous pourrez aussi aider une micro-entreprise qui débute à développer sa notoriété. Et pour cela, rien de plus simple, choisissez la catégorie dans laquelle poster votre besoin et faites confiance à votre jobber pour tout le reste, il réalisera votre mission en toute confiance et en toute sécurité !
            </Span>
            :
            <SpanReadMore onClick={()=>{setReadMore1(!readMore1)}}>Lire plus...</SpanReadMore>
          }
        </Text>
      </Article>
      <ArticleBlock>
        <LeftArticle>
          <H3>Des profils évalués aux compétences diversifiées</H3>
          <Text><ManageAccountsIcon style={styles.Icons}/>
            Étudiants, retraités, entrepreneurs, employés ou sans emploi, les jobbers de Yoojo ont des profils très variés et font chacun preuve de compétences et d'expériences diverses. Ainsi, certains jobbers sont - ou ont été - plombiers, électriciens,
            menuisiers ou encore informaticiens, certains sont des autodidactes passionnés, d'autres encore des professionnels qui ont déjà créé leur micro-entreprise. Mais, dans tous les cas, tous les jobbers sont des travailleurs compétents disponibles,
            {
              readMore2?
              <Span>
                serviables, organisés et surtout fiables. Alors, pour vous garantir sécurité et confiance, le sérieux et le professionnalisme de chaque jobber est validé par la communauté Yoojo. Pour cela, notre équipe de modération vérifie avec soin l’identité de tous les jobbers.
                Ensuite, toutes les prestations sont commentées et évaluées : une fois votre besoin posté, vous pouvez consulter les évaluations déjà reçues par chaque jobber. Ainsi, vous avez toutes les cartes en main pour choisir le jobber le plus professionnel et le plus compétent pour réaliser votre mission.
              </Span>
              :
              <SpanReadMore onClick={()=>{setReadMore2(!readMore2)}}>Lire plus...</SpanReadMore>
            }
          </Text>
        </LeftArticle>
        <RightArticle>
          <H3>Confiez tous vos besoins en quelques minutes</H3>
          <Text><AccessTimeIcon style={styles.Icons}/>
            Entre le ménage, le travail, les travaux et les enfants, vous avez l'impression que même le weekend ne vous laisse pas une minute de répit ? Déléguez simplement toutes les petites corvées qui vous encombrent et retrouvez un peu de temps pour vous grâce au jobbing. 
            {
              readMore3?
              <Span>
                En vous rapprochant de nombreux particuliers travaillant sur leur temps libre et de micro-entrepreneurs qui veulent développer leur activité, Yoojo vous permet de faire appel à un professionnel en quelques clics et vous facilite la vie. Alors oubliez les heures passées à repasser,
                à tondre la pelouse ou à monter vos meubles IKEA : confiez toutes vos corvées à un jobber et recentrez-vous sur l'essentiel, votre santé comme votre moral y gagneront.
              </Span>
              :
              <SpanReadMore onClick={()=>{setReadMore3(!readMore3)}}>Lire plus...</SpanReadMore>
            }
          </Text>
        </RightArticle>
      </ArticleBlock>
      <Article>
        <H3>{t('Youpijob devient Yoojo')}</H3>
        <Text>
          {t("Changement de nom à l’horizon ! Youpijob gagne en sérieux, en efficacité et en simplicité, en devenant Yoojo. Vous nous connaissez depuis quelques semaines, quelques années, ou depuis nos débuts en 2012, et êtes certainement attachés à la marque Youpijob. Nous aussi ! Cependant, de nombreuses raisons nous ont convaincu de la nécessité de changer de nom pour continuer au mieux le développement de nos services.")} 
           {t("Nous avons donc décidé de trouver un nom qui plaisait au plus grand nombre, qui représentait la modernité et le dynamisme et tout en conservant clairement les racines de Youpijob : c’est Yoojo ! Yoojo, c’est Youpijob, c’est nous, c’est pour vous.")}
          <SpanReadMore>
            {t("En savoir plus")}
          </SpanReadMore>
        </Text>
      </Article>
    </Container>
  )
}

export default Stimulate