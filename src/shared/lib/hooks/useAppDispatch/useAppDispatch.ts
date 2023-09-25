import { useDispatch } from 'react-redux';
import { type AppDispatch } from '@/app/providers/StoreProvider';

/**
 * Типизированный useDispatch
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
