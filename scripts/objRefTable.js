const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Plugins.Keyboard,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.Platform.Acts.SimulateControl
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{Sólido: 0},
	{chão: 0},
	{Sprite2: 0},
	{muro: 0},
	{Sprite3: 0},
	{Plataforma: 0},
	{Sprite4: 0},
	{nuvem: 0},
	{Teclado: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	chão: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	muro: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	nuvem: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {}
}