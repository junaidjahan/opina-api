import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'users'})
export class User {

    @PrimaryGeneratedColumn()
    id:number

    @Column("varchar")
    firstName: string

    @Column("varchar")
    lastName: string

    @Column("varchar")
    email: string

    @Column("varchar",{ nullable: true })
    phoneNumber: string | null

    @Column("datetime")
    createdAt: Date

    @Column("datetime", { nullable: true })
    updatedAt: string | null

    @Column("int",{default: 0})
    delete: number

}
