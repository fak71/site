const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.Pin,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Behaviors.scrollto,
		C3.Plugins.Keyboard,
		C3.Plugins.Text,
		C3.Behaviors.Anchor,
		C3.Plugins.Spritefont2,
		C3.Behaviors.Sin,
		C3.Plugins.Audio,
		C3.Plugins.Particles,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetPosToObject,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Platform.Cnds.OnMove,
		C3.Behaviors.Platform.Cnds.OnStop,
		C3.Behaviors.Platform.Cnds.OnJump,
		C3.Behaviors.Platform.Cnds.OnLand,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{FundoEmBlocos: 0},
	{Sólido: 0},
	{FundoEmBlocos2: 0},
	{moedas: 0},
	{Fixar: 0},
	{animacao: 0},
	{Plataforma: 0},
	{RestritoAoLayout: 0},
	{CentrarEm: 0},
	{jogador: 0},
	{Sprite3: 0},
	{gameoversensor: 0},
	{Teclado: 0},
	{coins: 0},
	{COINS: 0},
	{Âncora: 0},
	{Pontuação: 0},
	{FonteDeSprites: 0},
	{ação: 0},
	{COBRA: 0},
	{final: 0},
	{limite: 0},
	{Vidas: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Senóide: 0},
	{Sprite4: 0},
	{MENSAGEM: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Texto: 0},
	{Áudio: 0},
	{Partículas: 0},
	{pontos: 0},
	{vidaplayer: 0}
];

self.InstanceType = {
	FundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	FundoEmBlocos2: class extends self.ITiledBackgroundInstance {},
	animacao: class extends self.ISpriteInstance {},
	jogador: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	gameoversensor: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	COINS: class extends self.ISpriteInstance {},
	Pontuação: class extends self.ITextInstance {},
	FonteDeSprites: class extends self.ISpriteFontInstance {},
	COBRA: class extends self.ISpriteInstance {},
	final: class extends self.ISpriteInstance {},
	limite: class extends self.ISpriteInstance {},
	Vidas: class extends self.ITextInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	MENSAGEM: class extends self.ITextInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Áudio: class extends self.IInstance {},
	Partículas: class extends self.IParticlesInstance {}
}