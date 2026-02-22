// ============================================
// NEURO TRACE — Quiz Data
// ============================================

const PROFILES = {
    CT: {
        name: "Le Chaos Tendre",
        color: "#00e5ff",
        tagline: "Tu aimes dans le désordre — et c'est ta plus grande force.",
        teaser: "Tu exprimes l'amour d'une façon que peu de gens comprennent. Ton analyse complète t'explique pourquoi — et ce que ça change pour ton couple.",
        sections: [
            {
                icon: "🧠", title: "Ton profil décrypté",
                content: `<p>Tu as un <strong>style d'attachement sécure</strong> — c'est-à-dire que tu n'as pas peur d'être abandonné(e) et tu ne fuis pas l'intimité. C'est le style le plus stable, mais il est souvent mal compris.</p>
                <p>Parce que tu es à l'aise émotionnellement, tu exprimes l'amour de façon détendue : par le jeu, la taquinerie, les gestes spontanés. Quand tu voles la dernière frite de ton/ta partenaire, quand tu lui ébouriffes les cheveux, quand tu fais le pitre — c'est ta façon de dire "je suis tellement bien avec toi que je peux être moi-même à 100%".</p>
                <p>Le problème c'est que beaucoup de gens interprètent cette légèreté comme un manque de sérieux. Ton/ta partenaire peut se demander si tu prends vraiment la relation au sérieux. Surtout si il/elle a un style d'attachement anxieux — dans ce cas, ton humour le/la rassure pas, il/elle veut des mots, pas des blagues.</p>`
            },
            {
                icon: "🌱", title: "D'où ça vient",
                content: `<p>Ce style se développe généralement dans un environnement où l'affection était <strong>stable et prévisible</strong>. Pas forcément parfait — mais cohérent. Tu savais que tu étais aimé(e), même sans qu'on te le dise tous les jours.</p>
                <p>Du coup ton cerveau a appris que l'amour n'est pas quelque chose qu'il faut surveiller ou mériter en permanence. Il est là, c'est acquis, et tu peux te concentrer sur profiter de la relation plutôt que de la sécuriser.</p>
                <p>C'est pour ça que tu es naturellement dans le jeu plutôt que dans l'angoisse. Tu ne te demandes pas "est-ce qu'il/elle m'aime encore ?" — tu es déjà en train de chercher comment le/la faire rire.</p>`
            },
            {
                icon: "💪", title: "Tes 3 forces",
                content: `<ul>
                    <li><strong>Tu crées de la complicité naturellement.</strong> Les couples qui rient ensemble durent plus longtemps — c'est prouvé par la recherche de Gottman. Ton humour n'est pas un défaut, c'est un ciment relationnel que beaucoup de couples envient.</li>
                    <li><strong>Tu désamorces les tensions avant qu'elles explosent.</strong> Là où d'autres laissent un silence pesant s'installer après un désaccord, toi tu trouves un moyen de détendre l'atmosphère. Ce n'est pas de l'évitement — c'est de la régulation émotionnelle par l'humour.</li>
                    <li><strong>Tu rends ton/ta partenaire à l'aise avec sa propre vulnérabilité.</strong> En étant toi-même détendu(e) et "imparfait(e)", tu crées un espace où l'autre peut aussi baisser sa garde. C'est un cadeau rare.</li>
                </ul>`
            },
            {
                icon: "⚡", title: "Tes 3 schémas destructeurs",
                content: `<ul>
                    <li><strong>Tu utilises l'humour pour esquiver les conversations difficiles.</strong> Quand ton/ta partenaire essaie d'aborder un sujet sérieux et que tu réponds par une blague, tu penses détendre. Lui/elle entend : "tes émotions ne sont pas assez importantes pour que je les prenne au sérieux." Résultat : il/elle arrête de se confier et la distance s'installe en silence.</li>
                    <li><strong>Tu sous-estimes le besoin de mots de ton/ta partenaire.</strong> Tu montres l'amour par ce que tu fais, pas par ce que tu dis. Mais certaines personnes ont besoin d'entendre "je t'aime" et "tu comptes pour moi" — et le fait que tu le montres par des actes ne remplace pas les mots pour elles.</li>
                    <li><strong>Tu minimises tes propres besoins émotionnels.</strong> Comme tu es à l'aise avec toi-même, tu peux mettre tes propres besoins en arrière-plan trop longtemps. Tu accumules en silence jusqu'au jour où tu craques — et ton/ta partenaire ne comprend pas d'où ça vient parce que tu avais l'air "bien" depuis toujours.</li>
                </ul>`
            },
            {
                icon: "🔥", title: "Ton mode conflit",
                content: `<p><strong>Ton déclencheur :</strong> Quand on te reproche d'être "pas assez sérieux/sérieuse" ou qu'on remet en question la profondeur de tes sentiments.</p>
                <p><strong>Ta réaction automatique :</strong> Tu essaies d'abord de désamorcer par l'humour. Si ça ne marche pas, tu te fermes — pas par colère, mais par incompréhension. Tu ne comprends pas pourquoi on te demande de "prouver" quelque chose que tu considères comme évident.</p>
                <p><strong>Ce que tu dis que tu ne devrais pas :</strong> "Tu dramatises" ou "c'est pas si grave". Pour toi c'est une tentative de relativiser. Pour l'autre c'est une invalidation de ses émotions.</p>
                <p><strong>Temps de récupération :</strong> Rapide. Tu es capable de passer à autre chose en quelques heures. Mais attention — ton/ta partenaire a peut-être besoin de plus de temps, et ta rapidité à "oublier" peut être perçue comme de l'indifférence.</p>`
            },
            {
                icon: "🎯", title: "5 exercices concrets",
                content: `<ul>
                    <li><strong>Le check-in du soir.</strong> Chaque soir, pose cette question : "Comment tu te sens par rapport à nous aujourd'hui ?" Pas de blague après. Juste écouter. 3 minutes max. Ça montre que tu prends la relation au sérieux sans tuer ta légèreté naturelle.</li>
                    <li><strong>La règle des 30 secondes.</strong> Quand ton/ta partenaire aborde un sujet sérieux, attends 30 secondes avant de répondre avec de l'humour. Ces 30 secondes montrent que tu as entendu et que tu traites l'info.</li>
                    <li><strong>Un mot par jour.</strong> Envoie un message par jour qui dit explicitement ce que tu ressens. Pas un meme, pas une blague. Un vrai mot : "Je pensais à toi et je voulais te dire que je suis content(e) qu'on soit ensemble."</li>
                    <li><strong>Nomme tes propres émotions.</strong> Quand tu sens quelque chose de négatif, dis-le à voix haute au lieu de le masquer par une blague. "Là je suis un peu blessé(e) par ce que tu as dit." C'est inconfortable au début. Mais ça transforme la relation.</li>
                    <li><strong>Le débrief post-dispute.</strong> Après chaque conflit, même petit, reviens dessus le lendemain calmement : "Hier ça m'a touché quand... Je comprends que toi tu ressentais..." Ce n'est pas remuer le couteau — c'est montrer que tu traites les choses en profondeur.</li>
                </ul>`
            }
        ]
    },

    TD: {
        name: "La Tempête Douce",
        color: "#ff2eaa",
        tagline: "Tu aimes comme un ouragan — et l'autre ne sait pas toujours s'y tenir.",
        teaser: "L'intensité de tes émotions est ta force et ton piège. Ton analyse complète t'explique le mécanisme exact — et comment le maîtriser.",
        sections: [
            {
                icon: "🧠", title: "Ton profil décrypté",
                content: `<p>Tu as un <strong>style d'attachement anxieux-préoccupé</strong> orienté vers l'expression. Tu ressens l'amour de façon intense et tu as besoin de le montrer ET de le recevoir en retour.</p>
                <p>Quand tu aimes, tu aimes à fond. Les grandes déclarations, les surprises, les gestes romantiques, les "je t'aime" plusieurs fois par jour — c'est naturel pour toi.</p>
                <p>Le problème c'est que cette intensité peut effrayer. Ton/ta partenaire peut se sentir submergé(e), surtout si il/elle a un style d'attachement évitant. Et quand tu sens qu'il/elle recule, ton anxiété monte — ce qui te pousse à en faire encore plus, ce qui le/la fait reculer encore plus. C'est un cycle qui s'auto-alimente.</p>`
            },
            {
                icon: "🌱", title: "D'où ça vient",
                content: `<p>Ce style se développe souvent dans un environnement où l'affection était <strong>présente mais inconsistante</strong>. Parfois tu recevais beaucoup d'amour, parfois il disparaissait sans explication.</p>
                <p>Ton cerveau a appris que l'amour existe — mais qu'il peut être retiré à tout moment. Du coup tu as développé une hypersensibilité aux signaux relationnels. Tu détectes le moindre changement de ton, le moindre retard de réponse. C'est un système d'alarme très performant — mais qui se déclenche trop souvent.</p>`
            },
            {
                icon: "💪", title: "Tes 3 forces",
                content: `<ul>
                    <li><strong>Tu rends ton/ta partenaire visible.</strong> Dans un monde où beaucoup de gens se plaignent de ne pas se sentir aimés, toi tu ne laisses aucun doute. Ton/ta partenaire sait exactement ce qu'il/elle représente pour toi.</li>
                    <li><strong>Tu détectes les problèmes relationnels avant tout le monde.</strong> Ton hypersensibilité aux signaux émotionnels te permet de sentir quand quelque chose ne va pas avant que ça devienne un vrai problème.</li>
                    <li><strong>Tu crées de la profondeur émotionnelle.</strong> Les conversations superficielles t'ennuient. Tu pousses naturellement la relation vers plus d'intimité, plus de vérité, plus de connexion.</li>
                </ul>`
            },
            {
                icon: "⚡", title: "Tes 3 schémas destructeurs",
                content: `<ul>
                    <li><strong>Tu interprètes le silence comme un rejet.</strong> Quand ton/ta partenaire ne répond pas ou est distant(e), ton cerveau traduit : "il/elle ne m'aime plus." Tu réagis à cette interprétation, pas à la réalité. Et ta réaction (messages insistants, reproches) crée exactement la distance que tu essaies d'éviter.</li>
                    <li><strong>Tu fais passer les besoins de l'autre avant les tiens.</strong> Tu acceptes des choses qui ne te conviennent pas par peur de perdre l'autre. Ça crée de la frustration qui s'accumule, et un jour ça explose de façon disproportionnée.</li>
                    <li><strong>Tu confonds intensité et intimité.</strong> Tu peux croire qu'une relation est profonde parce qu'elle est intense (jalousie, réconciliations passionnées, montagnes russes). En réalité, l'intimité vraie c'est de se sentir en sécurité, pas excité(e).</li>
                </ul>`
            },
            {
                icon: "🔥", title: "Ton mode conflit",
                content: `<p><strong>Ton déclencheur :</strong> La distance émotionnelle. Un message sans réponse, un ton froid, un "tout va bien" qui sonne faux.</p>
                <p><strong>Ta réaction automatique :</strong> Tu veux en parler IMMÉDIATEMENT. Tu ne supportes pas l'incertitude. Si l'autre se ferme, ton anxiété monte en spirale.</p>
                <p><strong>Ce que tu dis que tu ne devrais pas :</strong> "Si tu m'aimais vraiment tu ferais..." ou "J'ai l'impression que je suis la seule personne qui fait des efforts."</p>
                <p><strong>Temps de récupération :</strong> Long tant que la réassurance n'est pas venue. Tu peux ruminer pendant des heures tant que le "problème" n'est pas explicitement résolu.</p>`
            },
            {
                icon: "🎯", title: "5 exercices concrets",
                content: `<ul>
                    <li><strong>La pause de 20 minutes.</strong> Quand tu sens l'anxiété monter, chronomètre 20 minutes avant de réagir. Pas pour ignorer l'émotion — pour laisser le pic redescendre. 8 fois sur 10, tu verras la situation différemment après.</li>
                    <li><strong>Le journal de preuves.</strong> Chaque soir, note 3 choses que ton/ta partenaire a faites aujourd'hui qui montrent qu'il/elle t'aime. Ça entraîne ton cerveau à voir les preuves d'amour au lieu de chercher les preuves de rejet.</li>
                    <li><strong>Dis le besoin, pas le reproche.</strong> Au lieu de "Tu ne me réponds jamais", dis "J'ai besoin de savoir que tu penses à moi dans la journée." Même message, résultat radicalement différent.</li>
                    <li><strong>Le temps solo volontaire.</strong> Impose-toi 1h par jour sans contact avec ton/ta partenaire. Tu apprends à ton cerveau que la séparation temporaire n'est pas une menace. Après 2 semaines, c'est libérateur.</li>
                    <li><strong>Le scan corporel avant de parler.</strong> Avant d'envoyer ce message, prends 10 secondes : mâchoire serrée ? Estomac noué ? Si oui, ton système d'alarme est activé. Ce que tu vas dire vient de la peur. Attends que le corps se calme.</li>
                </ul>`
            }
        ]
    },

    FM: {
        name: "Le Feu Muet",
        color: "#ff9d2e",
        tagline: "Tu brûles à l'intérieur — mais personne ne voit la flamme.",
        teaser: "Ton silence n'est pas de l'indifférence. Ton analyse complète t'explique pourquoi tu n'arrives pas à exprimer ce que tu ressens — et comment changer ça.",
        sections: [
            {
                icon: "🧠", title: "Ton profil décrypté",
                content: `<p>Tu as un <strong>style d'attachement évitant-distant</strong> — ce qui ne veut PAS dire que tu n'aimes pas. Tu aimes profondément. Mais tu l'exprimes par tes actes, pas par tes mots.</p>
                <p>Tu es la personne qui se lève tôt pour préparer le café, qui répare le truc cassé sans qu'on demande, qui conduit 2h sous la pluie pour venir aider. Tu montres l'amour en FAISANT, pas en DISANT.</p>
                <p>Le problème c'est que pour beaucoup de gens, si tu ne le dis pas, ça n'existe pas. Ton/ta partenaire peut vivre à côté de quelqu'un qui l'aime profondément et se sentir seul(e) quand même.</p>`
            },
            {
                icon: "🌱", title: "D'où ça vient",
                content: `<p>Ce style se développe souvent dans un environnement où <strong>exprimer ses émotions était risqué ou inutile</strong>. Soit parce que tes émotions étaient minimisées ("arrête de pleurer, c'est rien"), soit parce que tu as appris très tôt à compter sur toi-même.</p>
                <p>Ton cerveau a retenu : les émotions, ça se gère en interne. Les montrer c'est s'exposer. Du coup tu as développé une capacité impressionnante à rester calme et autonome — mais au prix d'un mur émotionnel que même toi tu as du mal à franchir.</p>`
            },
            {
                icon: "💪", title: "Tes 3 forces",
                content: `<ul>
                    <li><strong>Tu es un roc dans la tempête.</strong> Quand tout le monde panique, toi tu restes calme et tu agis. Cette stabilité émotionnelle est incroyablement rassurante.</li>
                    <li><strong>Ton amour est dans les preuves, pas dans les promesses.</strong> N'importe qui peut dire "je t'aime". Toi tu le démontres. Chaque acte de service est une preuve concrète.</li>
                    <li><strong>Tu ne crées jamais de drama.</strong> Ta relation avec toi est calme, stable, prévisible. Pour les gens qui ont vécu des relations chaotiques, tu es exactement ce qu'ils cherchent.</li>
                </ul>`
            },
            {
                icon: "⚡", title: "Tes 3 schémas destructeurs",
                content: `<ul>
                    <li><strong>Tu te fermes quand l'émotion monte.</strong> Plus la conversation devient émotionnelle, plus tu te rétractes. Ce que tu vis comme de l'auto-protection, l'autre le vit comme un rejet.</li>
                    <li><strong>Tu crois que montrer tes émotions est une faiblesse.</strong> Dire "j'ai peur de te perdre" te semble impossible. Tu préfères agir plutôt que parler. Mais le silence émotionnel prolongé crée un vide que ton/ta partenaire comble par du doute.</li>
                    <li><strong>Tu minimises les besoins émotionnels des autres.</strong> Quand on te dit "j'ai besoin de plus d'affection verbale", tu penses "mais je fais déjà tout ça pour toi". Tu invalides un besoin légitime parce qu'il ne correspond pas à ta façon de fonctionner.</li>
                </ul>`
            },
            {
                icon: "🔥", title: "Ton mode conflit",
                content: `<p><strong>Ton déclencheur :</strong> La pression émotionnelle. Quand on te demande "qu'est-ce que tu ressens ?" ou quand on insiste pour "en parler maintenant".</p>
                <p><strong>Ta réaction automatique :</strong> Tu te fermes. Physiquement et émotionnellement. Ce n'est pas de la malveillance — c'est ton système nerveux qui se met en mode protection.</p>
                <p><strong>Ce que tu dis que tu ne devrais pas :</strong> "On peut en parler plus tard ?" quand tu sais que "plus tard" veut dire "jamais". Ou pire : rien du tout.</p>
                <p><strong>Temps de récupération :</strong> Tu as besoin de temps SEUL(E) pour traiter. C'est légitime. Mais si tu ne communiques pas ce besoin, ton/ta partenaire interprète ton silence comme de l'abandon.</p>`
            },
            {
                icon: "🎯", title: "5 exercices concrets",
                content: `<ul>
                    <li><strong>La phrase du matin.</strong> Chaque matin, dis UNE phrase émotionnelle. "Je suis content(e) de me réveiller avec toi." Au début ça semble artificiel. Après 3 semaines, ça devient naturel.</li>
                    <li><strong>Le timer de conflit.</strong> Quand une conversation difficile arrive, dis : "J'ai besoin de [durée] pour réfléchir, je reviens à [heure]." Et respecte-le. Ça te donne ton espace ET ça rassure l'autre.</li>
                    <li><strong>Nomme l'inconfort.</strong> Au lieu de te taire, dis juste : "Je me ferme là, c'est pas contre toi, c'est que je sais pas quoi dire." C'est déjà de la vulnérabilité. Et ça change tout.</li>
                    <li><strong>Traduis tes actes en mots.</strong> Quand tu fais quelque chose pour l'autre, ajoute POURQUOI : "Je t'ai fait un café parce que j'avais envie de te faire plaisir." L'acte + le mot = 10 fois l'acte seul.</li>
                    <li><strong>Le défi de la vulnérabilité.</strong> Une fois par semaine, partage une chose que tu ressens et que tu n'as jamais dite. Chaque micro-ouverture élargit ton espace émotionnel.</li>
                </ul>`
            }
        ]
    },

    EF: {
        name: "L'Éclipse Fidèle",
        color: "#a855f7",
        tagline: "Tu disparais pour mieux revenir — mais l'autre ne le sait pas toujours.",
        teaser: "Ton besoin d'espace n'est pas un rejet. Ton analyse complète t'explique la mécanique exacte de ton cycle présence/absence — et comment éviter que l'autre le vive comme un abandon.",
        sections: [
            {
                icon: "🧠", title: "Ton profil décrypté",
                content: `<p>Tu as un <strong>style d'attachement sécure-évitant</strong> — un mix particulier. Tu es capable d'aimer profondément et d'être fidèle, mais tu as un besoin vital d'espace personnel.</p>
                <p>Tu fonctionnes par cycles : des moments de présence totale où tu es 100% avec l'autre, suivis de moments de retrait où tu as besoin de te retrouver. Ce n'est pas un rejet, c'est ta façon de te recharger.</p>
                <p>Quand tu es là, tu es vraiment là. Les moments que tu partages sont riches, profonds, intentionnels. Mais leur rareté crée de l'insécurité chez l'autre.</p>`
            },
            {
                icon: "🌱", title: "D'où ça vient",
                content: `<p>Ce style se développe souvent chez des personnes qui ont grandi dans un environnement où <strong>l'autonomie était valorisée</strong> — parfois par nécessité. Tu as appris tôt à te débrouiller seul(e), à trouver du réconfort dans ta propre compagnie.</p>
                <p>Ce n'est pas de l'égoïsme — c'est une compétence de survie devenue identité. Ta solitude n'est pas triste, elle est ressourçante. Le problème c'est que dans une relation, l'autre ne peut pas deviner la différence entre "j'ai besoin d'espace" et "je m'éloigne de toi".</p>`
            },
            {
                icon: "💪", title: "Tes 3 forces",
                content: `<ul>
                    <li><strong>Quand tu choisis d'être là, c'est un vrai choix.</strong> Tu n'es pas là par habitude ou par dépendance. Tu es là parce que tu VEUX être là. C'est la forme d'amour la plus authentique.</li>
                    <li><strong>Tu ne te perds jamais dans la relation.</strong> Tu gardes tes passions, tes amis, ton identité. Ça te rend intéressant(e) et ça crée un espace sain.</li>
                    <li><strong>La qualité de ta présence est exceptionnelle.</strong> Parce que tu ne satures pas de temps ensemble, chaque moment que tu donnes est concentré, intentionnel, mémorable.</li>
                </ul>`
            },
            {
                icon: "⚡", title: "Tes 3 schémas destructeurs",
                content: `<ul>
                    <li><strong>Tu disparais sans prévenir.</strong> Tu sens le besoin de t'isoler et tu le fais — sans expliquer. Pour toi c'est naturel. Pour l'autre c'est angoissant. "Il/elle était là, maintenant il/elle ne répond plus."</li>
                    <li><strong>Tu interprètes la demande de proximité comme de la pression.</strong> Quand ton/ta partenaire dit "tu me manques" ou "on se voit pas assez", tu entends "tu n'en fais pas assez" et ça te donne envie de reculer encore plus. C'est un cercle vicieux.</li>
                    <li><strong>Tu rationalises tes émotions au lieu de les vivre.</strong> Quand tu es triste, tu analyses pourquoi. Quand tu es en colère, tu relativises. Ça te rend fonctionnel(le) mais ça t'empêche de vraiment RESSENTIR et de partager ce que tu ressens.</li>
                </ul>`
            },
            {
                icon: "🔥", title: "Ton mode conflit",
                content: `<p><strong>Ton déclencheur :</strong> Quand on te reproche de ne pas être "assez présent(e)" ou quand on te fait sentir coupable de prendre du temps pour toi.</p>
                <p><strong>Ta réaction automatique :</strong> Tu te retires. Pas avec colère — avec calme. Tu rationalises ("j'ai le droit d'avoir du temps seul(e)") et tu te détaches émotionnellement de la dispute. Pour l'autre, c'est comme parler à un mur.</p>
                <p><strong>Ce que tu dis que tu ne devrais pas :</strong> "T'es trop dépendant(e)" ou "j'ai besoin de respirer". Ces phrases blessent profondément quelqu'un qui cherche juste de la connexion.</p>
                <p><strong>Temps de récupération :</strong> Rapide en apparence — tu "passes à autre chose" vite. Mais en réalité tu n'as pas traité le conflit, tu l'as rangé. Il ressortira plus tard sous une forme différente.</p>`
            },
            {
                icon: "🎯", title: "5 exercices concrets",
                content: `<ul>
                    <li><strong>Annonce tes éclipses.</strong> Avant de t'isoler, dis : "J'ai besoin de temps seul(e) ce soir, ça n'a rien à voir avec toi, on se retrouve demain matin." 10 secondes de communication qui évitent des heures d'angoisse chez l'autre.</li>
                    <li><strong>Le message-pont.</strong> Pendant tes moments d'absence, envoie un court message : "Je pense à toi, je suis dans mon truc, à tout à l'heure." Ça maintient le lien sans envahir ton espace.</li>
                    <li><strong>Planifie du temps ensemble.</strong> Au lieu de laisser les moments ensemble arriver "naturellement" (c'est-à-dire quand TU en as envie), bloque du temps dans ton agenda. Ça montre à l'autre que tu priorises la relation activement.</li>
                    <li><strong>Reste 5 minutes de plus.</strong> Quand tu sens l'envie de quitter une conversation émotionnelle, reste 5 minutes de plus. Pas une heure — 5 minutes. Ça étire ta zone de confort progressivement sans te brusquer.</li>
                    <li><strong>Partage ton monde intérieur.</strong> Ton/ta partenaire ne sait pas ce que tu fais quand tu t'isoles. Raconte : "Ce soir j'ai lu tel truc, ça m'a fait penser à ça." Tu l'invites dans ton espace au lieu de l'en exclure.</li>
                </ul>`
            }
        ]
    },

    VF: {
        name: "Le Volcan Fragile",
        color: "#f43f5e",
        tagline: "Tu ressens tout plus fort que les autres — et c'est épuisant autant que magnifique.",
        teaser: "Ton intensité émotionnelle n'est pas un défaut. Ton analyse complète t'explique le cycle exact qui se répète dans toutes tes relations — et comment en sortir.",
        sections: [
            {
                icon: "🧠", title: "Ton profil décrypté",
                content: `<p>Tu as un <strong>style d'attachement anxieux-ambivalent</strong> — c'est-à-dire que tu vis les émotions à une intensité supérieure à la moyenne. L'amour pour toi n'est pas tiède, il est brûlant. Et la peur de le perdre est tout aussi intense.</p>
                <p>Tu es la personne qui donne tout dans une relation. Ton temps, ton énergie, ton attention — sans compter. Le problème c'est que tu donnes souvent pour recevoir en retour. Et quand le retour n'est pas à la hauteur, la déception est proportionnelle à l'investissement.</p>
                <p>Ça crée un cycle : tu donnes beaucoup → tu attends beaucoup en retour → l'autre se sent sous pression → il/elle prend du recul → tu paniques → tu donnes encore plus → il/elle recule encore plus.</p>`
            },
            {
                icon: "🌱", title: "D'où ça vient",
                content: `<p>Ce style se développe souvent dans un environnement où <strong>l'amour était conditionnel ou imprévisible</strong>. Tu as appris que pour être aimé(e), il fallait "mériter" l'amour — par tes actions, ta gentillesse, ta disponibilité.</p>
                <p>Ton cerveau a intégré : l'amour n'est pas acquis, il se gagne et il peut se perdre à tout moment. Du coup tu es en état d'alerte permanent dans tes relations. Tu surveilles, tu analyses, tu anticipes — pas par possessivité, par peur.</p>`
            },
            {
                icon: "💪", title: "Tes 3 forces",
                content: `<ul>
                    <li><strong>Tu aimes avec une intensité que peu de gens atteignent.</strong> Quand tu es investi(e), l'autre se sent comme la personne la plus importante au monde. C'est un sentiment que la plupart des gens cherchent toute leur vie.</li>
                    <li><strong>Tu es profondément empathique.</strong> Tu ressens les émotions des autres presque physiquement. Cette empathie te permet de comprendre ton/ta partenaire à un niveau que peu de gens atteignent.</li>
                    <li><strong>Tu te bats pour la relation.</strong> Quand ça va mal, tu ne fuis pas. Tu veux réparer, comprendre, avancer. Cette persévérance est une force énorme — tant qu'elle est dirigée vers les bonnes personnes.</li>
                </ul>`
            },
            {
                icon: "⚡", title: "Tes 3 schémas destructeurs",
                content: `<ul>
                    <li><strong>Tu t'oublies dans la relation.</strong> Tu adaptes tes goûts, ton emploi du temps, tes amis, ta vie entière autour de l'autre. Au début ça ressemble à de la générosité. Avec le temps, tu ne sais plus qui tu es en dehors de la relation. Et si elle se termine, tu t'effondres — pas juste parce que tu perds l'autre, mais parce que tu te perds toi-même.</li>
                    <li><strong>Tu testes inconsciemment l'amour de l'autre.</strong> Tu crées des situations (petites crises, provocations, ultimatums) pour vérifier si l'autre "tient bon". Si il/elle reste malgré la tempête, ça te rassure temporairement. Mais ce test permanent épuise ton/ta partenaire et détruit la confiance.</li>
                    <li><strong>Tu confonds l'anxiété avec l'amour.</strong> Le cœur qui bat, l'estomac noué, l'obsession de l'autre — tu interprètes ces sensations comme de la passion. En réalité, c'est souvent de l'anxiété. Les relations saines ne donnent pas la nausée.</li>
                </ul>`
            },
            {
                icon: "🔥", title: "Ton mode conflit",
                content: `<p><strong>Ton déclencheur :</strong> Le sentiment de ne pas être une priorité. Quand l'autre choisit ses amis, son travail, ou son temps seul au-dessus de toi.</p>
                <p><strong>Ta réaction automatique :</strong> Explosion émotionnelle. Pleurs, reproches, rappel de tout ce que tu as fait pour l'autre. Tu vides le sac d'un coup — y compris des choses que tu avais accumulées en silence depuis des semaines.</p>
                <p><strong>Ce que tu dis que tu ne devrais pas :</strong> "Tu t'en fous de moi" ou "je donne tout et toi tu donnes rien." Ces généralisations ("toujours", "jamais", "rien") mettent l'autre en position impossible.</p>
                <p><strong>Temps de récupération :</strong> Variable. Tu peux passer de la colère à la culpabilité très vite. Tu regrettes ce que tu as dit, tu veux réparer immédiatement, et ce besoin de réparation urgente peut être tout aussi envahissant que la dispute elle-même.</p>`
            },
            {
                icon: "🎯", title: "5 exercices concrets",
                content: `<ul>
                    <li><strong>La liste des non-négociables.</strong> Écris 5 choses qui sont à TOI et qui ne dépendent pas de la relation : un hobby, un groupe d'amis, un objectif personnel. Investis-y du temps chaque semaine. Ça reconstruit ton identité propre.</li>
                    <li><strong>Le test de réalité.</strong> Quand tu te sens rejeté(e), écris la situation objectivement : "Il/elle n'a pas répondu à mon message depuis 2h." Puis écris ton interprétation : "Il/elle ne m'aime plus." Puis écris 3 autres explications possibles. Ça casse le réflexe anxieux.</li>
                    <li><strong>Donne sans comptabiliser.</strong> Pendant une semaine, fais des gestes pour l'autre SANS attendre de retour. Si tu sens la frustration monter parce que "il/elle ne fait pas pareil", c'est que tu donnais pour recevoir, pas pour donner.</li>
                    <li><strong>Le stop émotionnel.</strong> Quand tu sens l'explosion arriver, dis : "Je suis très activé(e) émotionnellement là, j'ai besoin de 10 minutes." Sors, marche, respire. Reviens quand tu peux parler au lieu de crier.</li>
                    <li><strong>Le feedback au lieu du procès.</strong> Remplace "Tu fais TOUJOURS ça" par "Quand [situation précise], je ressens [émotion précise]." Le premier accuse. Le second informe. L'autre peut entendre le second sans se défendre.</li>
                </ul>`
            }
        ]
    }
};

const QUESTIONS = [
    {
        text: "Ton/ta partenaire met un film que tu détestes. Tu fais quoi ?",
        answers: [
            { text: "Tu te moques du film à voix haute pendant toute la séance", profile: "CT" },
            { text: "Tu te colles contre lui/elle, au moins le câlin est bien", profile: "TD" },
            { text: "Tu regardes sans rien dire, ça lui fait plaisir c'est l'essentiel", profile: "FM" },
            { text: "Tu prends ton téléphone et tu fais ton truc à côté", profile: "EF" }
        ]
    },
    {
        text: "Vous êtes en soirée. Où est-ce qu'on te trouve ?",
        answers: [
            { text: "En train de raconter une histoire qui fait rire tout le monde", profile: "CT" },
            { text: "Sur la piste en train de danser collé(e) à ton/ta partenaire", profile: "TD" },
            { text: "Dans un coin tranquille à discuter avec 2-3 personnes", profile: "FM" },
            { text: "Tu fais ton tour, tu parles à tout le monde librement", profile: "EF" }
        ]
    },
    {
        text: "Ton/ta partenaire te vole la dernière part de pizza. Ta réaction ?",
        answers: [
            { text: "Tu lui voles un truc en retour pour te venger en rigolant", profile: "CT" },
            { text: "\"T'as de la chance que je t'aime\" avec un bisou", profile: "TD" },
            { text: "Tu dis rien, tu te refais une pizza plus tard", profile: "FM" },
            { text: "\"Chacun sa pizza la prochaine fois\" en rigolant", profile: "EF" }
        ]
    },
    {
        text: "Ton/ta partenaire a passé une sale journée. Comment tu réagis ?",
        answers: [
            { text: "Tu fais le pitre pour lui changer les idées", profile: "CT" },
            { text: "Tu le/la prends dans tes bras et tu lui dis que tu es là", profile: "TD" },
            { text: "Tu lui prépares son plat préféré sans rien demander", profile: "FM" },
            { text: "Tu lui laisses de l'espace, t'es là quand il/elle veut parler", profile: "EF" }
        ]
    },
    {
        text: "Qu'est-ce qui te fait sentir le plus aimé(e) ?",
        answers: [
            { text: "Quand on rit et qu'on délire ensemble", profile: "CT" },
            { text: "Quand on me dit des mots qui viennent du cœur", profile: "TD" },
            { text: "Quand on fait des choses pour moi sans que je demande", profile: "FM" },
            { text: "Quand on me consacre du temps de qualité sans distractions", profile: "EF" }
        ]
    },
    {
        text: "Un samedi soir, vos plans tombent à l'eau. Tu fais quoi ?",
        answers: [
            { text: "Tu improvises un truc fun sur le moment", profile: "CT" },
            { text: "Tant mieux, soirée cocooning à deux c'est encore mieux", profile: "VF" },
            { text: "Tu trouves une solution de remplacement efficace", profile: "FM" },
            { text: "Parfait, chacun fait son truc et on se retrouve plus tard", profile: "EF" }
        ]
    },
    {
        text: "Ton/ta partenaire ne répond pas depuis 3 heures. Tu penses quoi ?",
        answers: [
            { text: "Tu lui envoies un meme pour le/la faire réagir", profile: "CT" },
            { text: "Tu commences à t'inquiéter, tu rappelles", profile: "VF" },
            { text: "Il/elle doit être occupé(e), pas de stress", profile: "FM" },
            { text: "Normal, on a chacun nos vies", profile: "EF" }
        ]
    },
    {
        text: "C'est quoi ta plus grande peur en couple ?",
        answers: [
            { text: "Que la routine tue la complicité et qu'on devienne ennuyeux", profile: "CT" },
            { text: "Que l'autre arrête de m'aimer du jour au lendemain", profile: "VF" },
            { text: "Devoir exprimer des choses que je sais pas formuler", profile: "FM" },
            { text: "Perdre qui je suis en m'oubliant dans la relation", profile: "EF" }
        ]
    },
    {
        text: "Après une grosse dispute, tu fais quoi en premier ?",
        answers: [
            { text: "Tu essaies de détendre l'atmosphère avec un geste", profile: "CT" },
            { text: "Tu veux en reparler immédiatement pour régler ça", profile: "VF" },
            { text: "Tu prends du recul en silence pour réfléchir", profile: "FM" },
            { text: "Tu sors prendre l'air et tu reviens quand c'est retombé", profile: "EF" }
        ]
    },
    {
        text: "Qu'est-ce que les gens comprennent mal chez toi en couple ?",
        answers: [
            { text: "Ils pensent que je prends rien au sérieux", profile: "CT" },
            { text: "Ils pensent que je suis trop intense", profile: "TD" },
            { text: "Ils pensent que je suis froid(e)", profile: "FM" },
            { text: "Ils pensent que j'ai pas besoin de l'autre", profile: "EF" }
        ]
    },
    {
        text: "Ta relation idéale, c'est quoi en un mot ?",
        answers: [
            { text: "Complicité — on rit ensemble tous les jours", profile: "CT" },
            { text: "Passion — on vit tout à 100%", profile: "TD" },
            { text: "Stabilité — on construit quelque chose de solide", profile: "FM" },
            { text: "Liberté — on s'aime sans se limiter", profile: "EF" }
        ]
    }
];

// STRIPE PAYMENT LINKS — Replace these with your real Stripe Payment Links
const STRIPE_LINKS = {
    CT: "https://buy.stripe.com/9B63cvaEK8tCdpj3i3aAw00",
    TD: "https://buy.stripe.com/9B63cvaEK8tCdpj3i3aAw00",
    FM: "https://buy.stripe.com/9B63cvaEK8tCdpj3i3aAw00",
    EF: "https://buy.stripe.com/9B63cvaEK8tCdpj3i3aAw00",
    VF: "https://buy.stripe.com/9B63cvaEK8tCdpj3i3aAw00"
};
