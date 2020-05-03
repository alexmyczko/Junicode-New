$(document).ready(function(){
    var gothictext = "Warþ þan in dagans jainans, urrann gagrefts fram kaisara Agustau, \
gameljan allana midjungard. soh þan gilstrameleins frumista warþ at wisandin kindina Swriais \
raginondin Saurim Kwreinaiau. jah iddjedun allai, ei melidai weseina, ƕarjizuh in seinai baurg. \
Urrann þan jah Iosef us Galeilaia, us baurg Nazaraiþ, in Iudaian, in baurg Daweidis sei haitada \
Beþlaihaim, duþe ei was us garda fadreinais Daweidis, anameljan miþ Mariin sei in fragiftim \
was imma qeins, wisandein inkilþon. warþ þan, miþþanei þo wesun jainar, usfullnodedun dagos \
du bairan izai. jah gabar sunu seinana þana frumabaur jah biwand ina jah galagida ina in uzetin, \
unte ni was im rumis in stada þamma. jah hairdjos wesun in þamma samin landa, þairhwakandans \
jah witandans wahtwom nahts ufaro hairdai seinai. iþ aggilus fraujins anaqam ins jah wulþus \
fraujins biskain ins, jah ohtedun agisa mikilamma. jah qaþ du im sa aggilus: ni ogeiþ, \
unte sai, spillo izwis faheid mikila, sei wairþiþ allai managein, þatei gabaurans ist izwis \
himma daga nasjands, saei ist Xristus frauja, in baurg Daweidis.";

    var norsetext = "Þá mælti Hárr: Þá er þeir gengu með sævarstrǫndu Borssynir, fundu þeir \
    tré tvau ok tóku upp trén ok skǫpuðu af menn. Gaf inn fyrsti ǫnd ok líf, annarr vit ok \
hræring, þriði ásjónu, mál ok heyrn ok sjón, gáfu þeim klæði ok nǫfn. Hét karlmaðrinn Askr, \
en konan Embla, ok ólst þaðan af mannkindin, sú er byggðin var gefinn undir Miðgarði. Þar \
næst gerðu þeir sér borg í miðjum heimi, er kǫlluð er Ásgarðr. Þat kǫllum vér Trója. Þar byggðu \
goðin ok ættir þeira, ok gerðust þaðan af mǫrg tíðendi ok greinir bæði á jǫrðu ok í lofti. Þar \
er einn staðr, er Hliðskjálf heitir, ok þá er Óðinn settist þar í hásæti, þá sá hann of alla \
heima ok hvers manns athæfi ok vissi alla hluti, þá er hann sá. Kona hans hét Frigg Fjǫrgvinsdóttir, \
ok af þeira ætt er sú kynslóð komin, er vér kǫllum ása ættir, er byggt hafa Ásgarð inn forna ok þau \
ríki, er þar liggja til, ok er þat allt goðkunnug ætt. Ok fyrir því má hann heita Alfǫðr, at hann er \
faðir allra goðanna ok manna ok alls þess, er af honum ok hans krafti var fullgert. Jǫrðin var dóttir \
hans ok kona hans. Af henni gerði hann inn fyrsta soninn, en þat er Ása-Þórr. Honum fylgði afl ok \
sterkleikr. Þar af sigrar hann ǫll kvikvendi.";

    var latintext = "Beatꝰ uir qͥ non abiit in ꝯſilio impioꝝ et in uia peccatoꝛum nō ſedit. \
Sed in lege dn̄i uoluntaſ eiꝰ⹎ et in lege eiꝰ meditabitur die ac nocte. Et erit tanquā lignū \
quod plantatum eſt ſecuſ decurſuſ aquarum⹎ quod fructum ſuum dabit in tempoꝛe ſuo. \
Et foliū eiuſ non defluet⹎ et omnia quaecumq: faciet proſperabunt᷑. Non ſic impii non ſic⹎ ſed \
tanquam puluiſ quem ꝓicit uentuſ a faciae terrae. Ideo non reſurgunt peccatoꝛeſ in ꝯſilio \
iuſtoꝛum. Qm̄ nouit dn̄ſ uiam iuſtoꝝ⹎ et iter impioꝛum ꝑibit.";

    var oldenglishtext = "Her on ðisum geare forðferde \
      Ælfgiue Ymma Eadwardes cynges modor ⁊ Hardacnutes cynges. ⁊ on \
      þam sylfan geare gerædde se cyng ⁊ his witan þæt mann sceolde \
      forðian ut to Sandwic scipu. ⁊ setton Raulf eorl ⁊ Oddan eorl to \
      heafodmannum þærto. Ða gewende Godwine eorl ut fram Brycge mid \
      his scypum to Yseran. and let ut ane dæge ær midsumeres \
      mæsseæfene þæt he com to Næsse. þe is besuðan Rumenea. Þa com \
      hit to witenne þam eorlum ut to Sandwic. ⁊ hi þa gewendon ut \
      æfter þam oðrum scipum. ⁊ bead man landfyrde ut ongean þa \
      scipu. Þa amang þison þa wearð Godwine eorl gewarnod. ⁊ gewende \
      him þa into Pefenesea. ⁊ wearð þæt wæder swiðe strang. þæt þa \
      eorlas ne mihton gewitan hwet Godwine eorl gefaren hæfde. ⁊ \
      gewende þa Godwine eorl ut agean þæt he com eft to Brycge. ⁊ ða \
      oðra scipu gewenden heom eft ongean to Sandwic. ⁊ gerædde man þa \
      þæt þa scipu gewendan eft ongean to Lundene. ⁊ sceolde man \
      setton oðre eorlas ⁊ oðre hasæton to þam scipum. ða lengde hit \
      man swa lange þæt seo scipfyrd eall belaf. ⁊ gewendon ealle heom \
      ham. Ða geaxode Godwine eorl þet. ⁊ teah þa up his segl ⁊ his \
      lið. ⁊ gewendon heom þa west on an to Wiht. ⁊ eodon þær up. ⁊ \
      hergodon swa lange þær þæt þæt folc geald heom swa mycel swa hi \
      heom on legden.";

    var middleenglishtext = "Nan ancre, bi mi read, ne schal makien \
professiun—þet is, bihaten ase heast—but þreo þinges: þet beoð obedience, \
chastete, ant stude steaðeluestnesse, þet ha ne schal þet stude neauer \
mare changin bute for nede ane, as strengðe ant deaðes dred, obedience of \
hire bischop oðer of his herre. For hwa se nimeð þing on hond ant bihat hit \
Godd as heast forte don hit, ha bint hire þerto, ant sunegeð deadliche i þe \
bruche, ȝef ha hit brekeð willes. ȝef ha hit ne bihat nawt, ha hit mei do þah \
ant leauen hwen ha wel wule, as of mete, of drunch, flesch forgan oðer fisch, \
alle oþer swucche þinges, of werunge, of liggunge, of ures, of oþre beoden, \
segge swa monie oðer o swucche wise. Þeos ant þulliche oþre beoð alle i freo \
wil to don oðer to leten hwil me wule ant hwen me wule, bute ha beon bihaten. \
Ah chearite—þet is, luue—ant eadmodnesse ant þolemodnesse, treoweschipe ant \
haldunge of þe alde ten heastes, schrift ant penitence—þeos ant þulliche oþre, \
þe beoð summe of þe alde lahe, summe of þe neowe, ne beoð nawt monnes fundles, ne \
riwle þet mon stalde, ah beoð Godes heastes. Ant forþi euch mon mot ham nede \
halden, ant ȝe ouer alle, for þeos riwleð þe heorte. Of hire riwlunge is al \
meast þet ich write, bute i þe frumðe of þis boc ant i þe leaste ende.";

    $("#languages").change(function() {
	var l = "en";
	var t = oldenglishtext;
	switch ( $("#languages option:selected").attr("value") ) {
	case "MiddleEnglish":
	    l = "en";
	    t = middleenglishtext;
	    break;
	case "Latin":
	    l = "la"
	    t = latintext;
	    break
	case "Gothic":
	    l = "en";
	    t = gothictext;
	    break;
	case "OldIcelandic":
	    l = "is";
	    t = norsetext;
	}
	$(".textbox").attr("lang",l);
	$(".textbox").text(t);
    });

    $("#faces").change(function() {
	var wght = "400";
	var wdth = "100%";
	switch ( $("#faces option:selected").attr("value") ) {
	case "Light":
	    wght = "200";
	    wdth = "100%";
	    break;
	case "Medium":
	    wght = "500";
	    wdth = "100%";
	    break;
	case "Semibold":
	    wght = "600";
	    wdth = "100%";
	    break;
	case "Bold":
	    wght = "700";
	    wdth = "100%";
	    break;

	case "SemicompressedLight":
	    wght = "200";
	    wdth = "80%";
	    break;
	case "Semicompressed":
	    wght = "400";
	    wdth = "80%";
	    break;
	case "SemicompressedMedium":
	    wght = "500";
	    wdth = "80%";
	    break;
	case "SemicompressedSemibold":
	    wght = "600";
	    wdth = "80%";
	    break;
	case "SemicompressedBold":
	    wght = "700";
	    wdth = "80%";
	    break;

	case "CompressedLight":
	    wght = "200";
	    wdth = "60%";
	    break;
	case "Compressed":
	    wght = "400";
	    wdth = "60%";
	    break;
	case "CompressedMedium":
	    wght = "500";
	    wdth = "60%";
	    break;
	case "CompressedSemibold":
	    wght = "600";
	    wdth = "60%";
	    break;
	case "CompressedBold":
	    wght = "700";
	    wdth = "60%";
	}

	$(".textbox").css("font-weight",wght);
	$(".textbox").css("font-stretch",wdth);
    });

    function featureString (s, tag, v) {
	var ss = s;
	if (ss.length > 0)
	    ss += ", ";
	ss += '"' + tag + '" ' + v;
	return ss;
    }

    $(".check").change(function() {
	var fstring = "";
	$("input").each(function() {
	    if ($( this ).is(":checked")) {
		fstring = featureString(fstring, $(this).attr("id"), "on");
	    }
	});
//	alert(fstring);
	$(".textbox").css("font-feature-settings", fstring);
    });
});