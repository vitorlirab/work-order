import { BaseEntity } from '../commons/entities/abstract.entity';
import { Column, CreateDateColumn, Entity, ManyToOne } from 'typeorm';
import { getUTCDate } from '../commons/functions/get-utc-date.function';
import { WorkOrderEntity } from '../work-orders/work-order.entity';

@Entity('comment')
export class CommentEnity extends BaseEntity {
  @Column('uuid', { name: 'orderid' })
  orderId: string;

  @ManyToOne(() => WorkOrderEntity)
  workOrder: WorkOrderEntity;

  @Column()
  description: string;

  @CreateDateColumn({ name: 'createddate', type: 'timestamp with time zone' })
  sendDate = getUTCDate();
}
