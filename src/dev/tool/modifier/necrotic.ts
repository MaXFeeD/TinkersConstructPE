createItem("tcon_necrotic_bone", "Necrotic Bone");


class ModNecrotic extends TinkersModifier {

    constructor(){
        super("necrotic", "Necrotic", 11, [ItemID.tcon_necrotic_bone], 1, true);
    }

    override onDealDamage(victim: number, player: number, damageValue: number, damageType: number, level: number): void {
        const add = damageValue * 0.1 * level | 0;
        if(add > 0){
            Entity.setHealth(player, Math.min(Entity.getHealth(player) + add, Entity.getMaxHealth(player)));
        }
    }
    
}

// KEX.LootModule.addOnDropCallbackFor("entities/wither_skeleton", (drops, context) => {
//     const player = context.getKillerPlayer();
//     if(Math.random() < (player ? 0.1 : 0.05)){
//         drops.addItem(ItemID.tcon_necrotic_bone, 1, 0);
//     }
// });

// KEX.LootModule.createLootTableModifier("entities/wither_skeleton")
//     .createNewPool()
//         .addEntry()
//             .describeItem(ItemID.tcon_necrotic_bone)
//             .describeItem("minecraft", "tcon_necrotic_bone")
//             .setWeight(1)
//             .setCount(1)
//         .endEntry()
//         .beginConditions()
//             .addKilledByPlayerCondition()
//             .addRandomChanceWithLootingCondition(0.8, 0.1)
//         .endConditions()
//     .endPool();
